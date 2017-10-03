var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('Zdraztvi')
})

app.get('/', function(req, res) {
  res.send('Zdraztviche')
})
