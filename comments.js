// Create web server
var http = require('http');
// File System
var fs = require('fs');
// Create server
http.createServer(function (req, res) {
    // Open a file on the server and return its content:
    fs.readFile('comments.html', function(err, data) {
        // HTTP status 200: ok
        // Content type: text/plain
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Write the content of the file to response body
        res.write(data);
        // End of response
        res.end();
    });
}).listen(8080);