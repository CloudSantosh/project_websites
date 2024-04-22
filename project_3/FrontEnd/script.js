// script.js
function addTask() {
    var input = document.getElementById('todo-input');
    var newTask = input.value.trim();
    if (newTask !== "") {
        var li = document.createElement('li');
        li.textContent = newTask;

        li.onclick = function() {
            this.parentNode.removeChild(this);
        };
        document.getElementById('todo-list').appendChild(li);
        input.value = "";  // Clear the input box
        
    } else {
        alert("Please enter a task!");
    }
}
