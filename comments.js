// Create Web Server
// Create a Web Server using the http module
// This Web Server should listen to port 3000
// When a user visits the main page (http://localhost:3000/), it should display a list of comments from the comments.json file
// When a user visits the page /api/comments, it should return the comments in JSON format
// When a user visits a page that does not exist, it should display a 404 page

// Create Web Server
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    if (pathname === '/' && method === 'GET') {
        fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
            } else {
                const comments = JSON.parse(data);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <h1>Comments</h1>
                    <ul>
                        ${comments.map(comment => `<li>${comment.name}: ${comment.comment}</li>`).join('')}
                    </ul>
                `);
            }
        });
    } else if (pathname === '/api/comments' && method === 'GET') {
        fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
            } else {
                const comments = JSON.parse(data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(comments));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
// Create a Web Server using the