var formE1 = document.querySelector("#task-form");
var taskToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoE1.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);



