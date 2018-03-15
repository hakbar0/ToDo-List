const express = require('express');
const app = express(), PORT = 3000, todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.sendFile('index.html');
})

app.use('/api/todos', todoRoutes);

app.listen(PORT, function () {
  console.log('Server has started.');
})

