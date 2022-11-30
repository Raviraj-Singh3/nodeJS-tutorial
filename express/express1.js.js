const express = require('express')
const app = express();
const PORT = 3000;

app.get('/home', function exep(req,res){
    res.send("home")
})
app.get('/', function(req, res){
    res.send("hello world")
})

app.listen(PORT, function(){
    console.log("server started on:",PORT)
});