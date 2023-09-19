const http = require('http');


//////////////////////////////
// make a server by help of HTTP module
const server = http.createServer((req,res) =>{
    res.end('data comes form server')
});

server.listen(8000)