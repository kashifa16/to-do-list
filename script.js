window.onload = loadTasksFromLocalStorage;

document.getElementById("add-btn").addEventListener("click", function() {
    const inputField = document.getElementById("todo-input");
    const task = inputField.value.trim();
  
    if (task !== "") {
      addTaskToList(task);  
      saveTasksToLocalStorage();  
      inputField.value = ""; 
    }
});

function addTaskToList(task) {
    const todoList = document.getElementById("todo-list");
  
    const listItem = document.createElement("li");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }
        saveTasksToLocalStorage();  
    });
  
    const taskText = document.createTextNode(task);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        todoList.removeChild(listItem); 
        saveTasksToLocalStorage();  
    });
  
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
  
    todoList.appendChild(listItem);
}

function saveTasksToLocalStorage() {
    const todoList = document.getElementById("todo-list");
    const tasks = [];
  
    for (let i = 0; i < todoList.children.length; i++) {
        const listItem = todoList.children[i];
        const taskText = listItem.childNodes[1].nodeValue;  
        const isCompleted = listItem.classList.contains("completed");  
        tasks.push({ text: taskText, completed: isCompleted });
    }
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const todoList = document.getElementById("todo-list");
  
    tasks.forEach(task => {
        const listItem = document.createElement("li");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;  
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
            saveTasksToLocalStorage();  
        });
  
        const taskText = document.createTextNode(task.text);
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            todoList.removeChild(listItem); 
            saveTasksToLocalStorage();  
        });
  
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
  
        todoList.appendChild(listItem);
    });
}
