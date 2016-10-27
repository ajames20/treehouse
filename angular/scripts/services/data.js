/*jslint node: true*/
'use strict';

angular.module('todoListApp')

.service('dataService', function($http) {

    this.helloConsole = function() {
        console.log('This is the helloConsole function');
    };
    this.getTodos = function(callback) {
        $http.get('mock/todos.json')
          .then(callback);
    };

    this.deleteTodo = function(todo){
      console.log("The " + todo.name + " has been deleted!");
    };

    this.saveTodo = function(todo){
      console.log("The " + todo.name + " has been saved!");
    };
});
