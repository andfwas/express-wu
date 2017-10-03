var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('hey buddy')
})

app.get('/', function(req, res) {
  res.send('hey there buddy')
})
