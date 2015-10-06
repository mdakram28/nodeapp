var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send(process.env.IP+":"+process.env.PORT);
});

app.listen(process.env.PORT,process.env.IP);

console.log("server running on port 3000");