var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "api1.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/check', (req, res) => {
   res.status(200).send('OK');
 });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})