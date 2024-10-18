// server.js
const http = require('http');

// create a server
const server = http.createServer((req, res) => {
    if (req.method === `GET`) {
        // handle get request
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is a GET request'); // always ensure res.end() is called
    } else if (req.method === 'POST') {
        // handle POST request and collect body data
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // convert buffer to string
        })

        req.on('end', () => {
            console.log('POST request body:', body); // log the post data
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(`Received POST data: ${body}`); // always end the response
        })
    } else {
        // handle other request methods
        res.statusCode = 405; // Method not allowed
        res.end('Method not allowed'); // always end the response
    }
});

// define a port number
const port = 2000;

// start the server and listen on specified port
server.listen(port, () => console.log(`Server is listening on port ${port}`));
