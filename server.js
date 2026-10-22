/**
 * ROBUST ZERO-DEPENDENCY HTTP SERVER FOR KINGDOM HEARTS CHRONICLES
 * Supporta HTTP Range requests (audio streaming mp3), graceful error handling e WHATWG URL.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.mp4': 'video/mp4',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

process.on('uncaughtException', (err) => {
  console.error('[KH Server Warning - UncaughtException]:', err.message);
});

process.on('unhandledRejection', (reason) => {
  console.error('[KH Server Warning - UnhandledRejection]:', reason);
});

const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.warn('[Request Socket Error]:', err.message);
  });
  res.on('error', (err) => {
    console.warn('[Response Socket Error]:', err.message);
  });

  let pathname;
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    pathname = decodeURIComponent(parsedUrl.pathname);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('400 Richiesta non valida');
    return;
  }

  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const filePath = path.normalize(path.join(BASE_DIR, pathname));

  // Protezione path traversal
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Accesso Negato');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404 Risorsa non trovata: ${pathname}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;
    const range = req.headers.range;

    // Gestione streaming audio/video Range (HTTP 206)
    if (range && (ext === '.mp3' || ext === '.m4a' || ext === '.mp4' || ext === '.wav' || ext === '.ogg')) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

      if (start >= totalSize || end >= totalSize) {
        res.writeHead(416, {
          'Content-Range': `bytes */${totalSize}`
        });
        res.end();
        return;
      }

      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });

      fileStream.on('error', (streamErr) => {
        fileStream.destroy();
      });

      res.on('close', () => {
        fileStream.destroy();
      });

      fileStream.pipe(res);
    } else {
      // Risposta standard HTTP 200
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': totalSize,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });

      const fileStream = fs.createReadStream(filePath);

      fileStream.on('error', (streamErr) => {
        fileStream.destroy();
      });

      res.on('close', () => {
        fileStream.destroy();
      });

      fileStream.pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n👑 Kingdom Hearts Chronicles è attivo su: http://localhost:${PORT}`);
  console.log(`Piazza il tuo browser all'indirizzo sopra per esplorare l'archivio della luce e dei ricordi.\n`);
});

// Keepalive timer
setInterval(() => {}, 60000);
