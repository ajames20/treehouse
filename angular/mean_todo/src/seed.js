'use strict'

var Todo = require('./models/todo.js');

var todos = [
  "feed the dog",
  "milk the cow",
  "get fresh food"
];


todos.forEach(function(todo, index){
  Todo.find({'name': todo}, function(err, todos){
    if(!err && !todos.length){
      Todo.create({completed: false, name: todo});
    }
  });
});
