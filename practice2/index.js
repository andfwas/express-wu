var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('MUCHACHOS QUE PASO')
})

app.get('/', function(req, res) {
  res.send('hola muchachos')
})
