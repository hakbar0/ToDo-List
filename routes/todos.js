const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.Todo.find()
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    })
});

router.post('/', function(req, res){
  db.Todo.create(req.body)
  .then(function(newTodo){
    res.status(201).json(newTodo);
  })
  .catch(function (err) {
    res.send(err);
  })
})

router.get('/:todoId', function(req, res){
  db.Todo.findById(req.params.todoId)
  .then(function(foundToDo){
    res.json(foundToDo);
  })
  .catch(function(err){
    res.send(err);
  })
})

router.put('/:todoId', function(req, res){
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body)
  .then(function(todo){
    res.json(todo);
  })
  .catch(function(err){
    res.send(err);
  })
})

module.exports = router;