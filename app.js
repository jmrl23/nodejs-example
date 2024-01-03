const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const server = http.createServer(handler);
const port = parseInt(process.env.PORT ?? '3000', 10);

/**
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 */
async function handler(request, response) {
  if (request.url === '/') {
    const page = await fs.readFile(path.join(__dirname, 'index.html'), {
      encoding: 'utf-8',
    });

    response.setHeader('Content-Type', 'text/html');
    response.end(page);
  }
}

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
