// Problem: user interaction does not provide desired results
// Solution: add intractivity so that user can manage daily tasks
var taskInput = document.getElementById("new-task"); //#new-task

var addButton = document.getElementsByTagName("button")[0]; //first button onpage


var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //#incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //#completed-tasks

//new task li item
var createTaskListElement = function(taskString) {
    // create li item
    var listItem = document.createElement("li");
    // create input <checkbox>
    var checkBox = document.createElement("input");
    // label
    var label = document.createElement("label");
    // input <label>
    var editInput = document.createElement("input");
    // button .edit
    var editButton = document.createElement("button");
    // button .delete
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    // each element needs to be modifying
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    //and appended li item needs appending
    return listItem;
};


// add new tasks
var addTask = function() {
    console.log("Add Task...");
    // create a new li item with the text from the new tasks
    var listItem = createTaskListElement(taskInput.value);

    // append li item to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
};


// edit exisiting tasks
var editTask = function() {
    console.log("Edit Task...");
    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var contiansClass =  listItem.classList.contains("editMode");
    // if the class of the parent has class editMode
    if (contiansClass) {

      // swtih form editMode
      // label text becomes inputs value
      label.innerText = editInput.value;

    } else {
      // switch to editMode
      // input value becomes the labels text
      editInput.value = label.innerText;
    }
  listItem.classList.toggle("editMode");

};

//toggle editMode



// delete an existing task
var deleteTask = function() {
    console.log("Delete Task...");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    //remove the parent li item form the ul
    ul.removeChild(listItem);
};


// mark a task as complete
var taskCompleted = function() {
    console.log("Task complete...");
    //append task li item to the completed-tasks
    var listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
};

// mark a task as incomplete
var taskIncomplete = function() {
    console.log("Task incomplete...");
    // append li item to incomplete-tasks
    var listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("bind list item events");
    //select li items children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    // bind the editTask edit button
    editButton.onclick = editTask;

    // bind the deleteTask to delete button
    deleteButton.onclick = deleteTask;

    // bind checkBoxEventHandler to checkebox
    checkBox.onchange = checkBoxEventHandler;
};

var addEvent = function() {
  console.log("We add two events to your button");
};


//set the click handler to addButton function

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", addEvent);



//cycle over incomplete task holder ul li items
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);

}

//bind events to li items children(taskIncomplete)


//cycle over complete task holder ul li items
for (var i = 0; i < completedTaskHolder.children.length; i++) {
    //bind events to li items children(taskIncomplete)
    bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);

}
