/*jslint node: true*/

'use strict';

var express = require('express');
var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res){
  res.json({todos: todos});
});

// TODO: add a POST route to create new entries
// TODO: add a PUT rout to update existing entries
// TODO: add a DELETE route to delete to delete entries



module.exports = router;
