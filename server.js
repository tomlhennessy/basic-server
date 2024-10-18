// server.js
const http = require('http');

// create a server
const server = http.createServer((req, res) => {
    // handle the rest and response here
});

// define a port number
const port = 5000;

// start the server and listen on specified port
server.listen(port, () => console.log(`Server is listening on port ${port}`));
