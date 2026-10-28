#!/usr/bin/env node
// Static file server for the PATIO mirror, no dependencies.
// Usage: node tools/serve.mjs [port] [document-root]
// Binds 127.0.0.1 only. Honest 404s, no SPA fallback. Logs path + status.

import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number(process.argv[2] || 8080);
const repoRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const root = resolve(process.argv[3] || repoRoot);

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.wasm': 'application/wasm',
  '.gz': 'application/gzip', '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.mp4': 'video/mp4',
  '.bin': 'application/octet-stream', '.dat': 'application/octet-stream',
  '.hdr': 'application/octet-stream', '.ktx2': 'image/ktx2',
};

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(body);
}

const server = createServer(async (req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
  } catch {
    console.log(`400 ${req.url}`);
    return send(res, 400, 'bad request\n');
  }
  let target = normalize(join(root, pathname));
  if (target !== root && !target.startsWith(root + sep)) {
    console.log(`403 ${pathname}`);
    return send(res, 403, 'forbidden\n');
  }
  try {
    let st = await stat(target).catch(() => null);
    if (st?.isDirectory()) {
      target = join(target, 'index.html');
      st = await stat(target).catch(() => null);
    }
    if (!st?.isFile()) {
      console.log(`404 ${pathname}`);
      return send(res, 404, 'not found\n');
    }
    const type = TYPES[extname(target).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': st.size,
      'Cache-Control': 'no-cache',
    });
    console.log(`200 ${pathname}`);
    createReadStream(target).pipe(res);
  } catch (err) {
    console.log(`500 ${pathname} ${err.message}`);
    send(res, 500, 'internal error\n');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`patio-fyi mirror listening on http://127.0.0.1:${port}/ (root ${root})`);
});
