const mongoose = require('mongoose');

let todoScheme = new mongoose.Schema({
  name: {
    type: String,
    require: 'Name cannot be blank.'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_Date: {
    type: Date,
    default: Date.now
  }
});

let Todo = mongoose.model('Todo', todoScheme);

module.exports = Todo;