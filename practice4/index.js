var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('Ohio')
})

app.get('/', function(req, res) {
  res.send('Ohio gozaimasu')
})
