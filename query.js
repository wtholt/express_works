var express = require('express')
var app = express()

app.get('/search', function(req, res){
  var json = req.query
  res.send(json)
})

app.listen(process.argv[2])