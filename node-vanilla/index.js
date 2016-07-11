var http = require("http");

var server = http.createServer((request, response) => {

  response.setHeader('Connection', 'close');
  response.end("Zero params");
}); // 10200

server.listen(3000);

console.log('NodeJS (vanilla) server listening on port 3000');

