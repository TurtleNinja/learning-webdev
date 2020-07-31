/*
Add: add the new task to the list
Done: cross the task out if checked
Delete: delete a task from the list
*/


function addItem(task) {
    // the checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.onclick = function() {
        let parent = this.parentNode;
        parent.classList.toggle("checked");
    }

    // the task content
    let content = document.createElement("label");
    content.innerHTML = task;

    // the delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        let parent = this.parentNode;
        parent.remove();
    }

    // append to the list item
    let li = document.createElement("li");
    li.appendChild(checkbox);
    li.appendChild(content);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
}

document.addEventListener("DOMContentLoaded", () => {
    var addButton = document.querySelector("#add");
    var todoList = document.querySelector("#todoList");
    var newTodo = document.querySelector("#newTodo"); 
    
    addButton.onclick = function() {
        let taskStr = newTodo.value;
        if (taskStr === "") {
            return;
        }
        else {
            // create and add a new list item to the list
            addItem(taskStr);
            newTodo.value = "";     // reset the input field
        }
    }
});