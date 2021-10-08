<<<<<<< HEAD
=======

>>>>>>> feature/add-task
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
<<<<<<< HEAD
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);
=======
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

  buttonEl.addEventListener("click", createTaskHandler);
>>>>>>> feature/add-task
