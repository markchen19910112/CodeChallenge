var express = require('express');
var app = express();
var fs = require("fs");


//load data and convert to tree
app.get('/listUsers', function (req, res) {
   fs.readFile( "categories.json", 'utf8', function (err, data) {
      var array_data = new Array(); 
      var arrayToTree = require('array-to-tree');
      array_data  = data;
      var tree_data= JSON.parse(array_data);
      var tree =arrayToTree(tree_data,{customID:'categoryId',parentProperty:'parent'});
      console.log(tree)  
      res.end( data );
   });
})


//establish a server
var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Listening on port: "+port);
})





