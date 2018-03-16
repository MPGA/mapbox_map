var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(/Users/monicagandino/Documents/mapbox_map+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join+'/Users/monicagandino/Documents/mapbox_map/index.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(/Users/monicagandino/Documents/mapbox_map+'/sitemap.html'));
});

app.listen(3000);

console.log(''Running at port 3000'');
