var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('G\'day')
})

app.get('/', function(req, res) {
  res.send('G\'day MATIE!')
})
