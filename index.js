const express = require('express');
const app = express(), PORT = 3000;

app.get('/', function(req, res){
  res.send("Hi.");
})

app.listen(PORT, function(){
  console.log('Server has started.');
})

