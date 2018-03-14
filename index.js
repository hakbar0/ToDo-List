const express = require('express');
const app = express(), PORT = 3000, todoRoutes = require('./routes/todos');


app.get('/', function(req, res){
  res.send("Hi.");
})

app.use('/api/todos', todoRoutes);

app.listen(PORT, function(){
  console.log('Server has started.');
})

