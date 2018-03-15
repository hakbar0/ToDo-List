const db = require('../models');

exports.getTodos = function (req, res) {
  db.Todo.find()
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    })
}

exports.createTodos = function (req, res) {
  db.Todo.create(req.body)
    .then(function (newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(function (err) {
      res.send(err);
    })
}

exports.getTodo = function (req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function (foundToDo) {
      res.json(foundToDo);
    })
    .catch(function (err) {
      res.send(err);
    })
}

exports.editTodo = function (req, res) {
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body)
    .then(function (todo) {
      res.json(todo);
    })
    .catch(function (err) {
      res.send(err);
    })
}

exports.deleteTodo = function (req, res) {
  db.Todo.remove({ _id: req.params.todoId })
    .then(function () {
      res.json({ message: 'we deleted it.' });
    })
    .catch(function (err) {
      res.send(err);
    })
}


module.exports = exports;