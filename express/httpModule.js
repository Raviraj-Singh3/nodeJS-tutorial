const http = require('http');
//import http from 'http'; ----es6 type:module
const PORT = 3000;
const server = http.createServer(function expe(req,res){
    console.log(req.method);
    console.log(req.url);
    if(req.url=='/home'){
        res.end("welcome to home");
    }
    res.end("hello World");
})
server.listen(PORT, function process(){
    console.log("sevrer started on :",PORT);
})