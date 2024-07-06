// Create Web Server
// Use Node.js to create a web server that listens for requests on port 3000 and responds with a simple message. 
// The server should respond to any request with a simple message, such as "Hello, World!".

// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
});

// Listen for incoming requests
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// The server is now running on port 3000 and will respond to any request with the message "Hello, World!".
