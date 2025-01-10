document.getElementById("add-btn").addEventListener("click", function() {
    const inputField = document.getElementById("todo-input");
    const task = inputField.value.trim();
  
    if (task !== "") {
      addTaskToList(task);
      inputField.value = ""; // Clear the input field
    }
  });
  
  function addTaskToList(task) {
    const todoList = document.getElementById("todo-list");
  
    // Create a new list item
    const listItem = document.createElement("li");
  
    // Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        listItem.classList.add("completed");
      } else {
        listItem.classList.remove("completed");
      }
    });
  
    // Add task text
    const taskText = document.createTextNode(task);
  
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      todoList.removeChild(listItem); // Remove the task
    });
  
    // Append the checkbox, task text, and delete button to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
  
    // Add the new task to the list
    todoList.appendChild(listItem);
  }
  