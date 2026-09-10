var http = require("http");

//create server 
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'application/json' });
    if (request.url == "/info"){
        var date = JSON.stringify({
            name: "hello india",
            course : "node js",
            duration : 180,
            fees : 70000
        });
        response.write(date);
    }
    response.end();
});

//start server
const portno = 5000;
server.listen (portno);
console.log('ready to accept request');
