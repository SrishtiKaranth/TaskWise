const userInput = document.getElementById("usernameplace");

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        storeUserInput();
    }
});

userInput.addEventListener("blur", function() {
    storeUserInput();
});

function storeUserInput() {
    const enteredValue = userInput.value;
    console.log("User entered: " + enteredValue);
    user.innerHTML = enteredValue;
}

const newtask = document.getElementById("new");
const deltask = document.getElementById("remove");
const alltasks = document.getElementById("alltasks");

let todolist = [];

newtask.addEventListener("click", function () {
    addNewTask();
});

deltask.addEventListener("click", function () {
    removeSelectedTasks();
});

function addNewTask() {
    const taskItem = document.createElement("li"); // Create a new list item
    taskItem.classList.add("task");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkboxes");
    checkbox.addEventListener("change", function () {
        updateTaskStatus(taskItem, checkbox.checked);
    });

    const taskNameInput = document.createElement("input");
    taskNameInput.type = "text";
    taskNameInput.classList.add("taskentry");
    taskNameInput.placeholder = "Enter task name...";
    taskNameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addNewTask();
        }
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskNameInput);
    alltasks.appendChild(taskItem);

    todolist.push({ taskItem, checked: false });
}

function removeSelectedTasks() {
    todolist = todolist.filter((item) => !item.checked);
    updateTaskList();
}

function updateTaskStatus(taskItem, isChecked) {
    const taskIndex = todolist.findIndex((item) => item.taskItem === taskItem);
    if (taskIndex !== -1) {
        todolist[taskIndex].checked = isChecked;
    }
}

function updateTaskList() {
    alltasks.innerHTML = ""; // Clear the task list

    todolist.forEach((item) => {
        alltasks.appendChild(item.taskItem);
    });
}
