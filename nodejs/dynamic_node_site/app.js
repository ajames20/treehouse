//Problem:We need a simple way to look at a users badge count and JS points from a web browser

//Solution:Use node.js to perform the profile looksups and serve our templates via http
var router = require("./router.js");
//1.Create a Web Server
var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(request, response) {
    // response.end('Hello World');
    router.home(request, response);
    router.user(request, response);
}).listen(port);

server.listen(function(port, hostname) {
    console.log("Server running at http: HOST-COMPUTER ");
});
