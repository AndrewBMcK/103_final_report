let taskList = []
let id = 0;

function addTask() {
    let title = document.getElementById("taskTitle").value
    let taskTime = document.getElementById("taskTime").value
    let task = {title, taskTime}
    displayTask(task)
}

function displayTask(task) {
    id++
    taskList[id]= task
    document.getElementById("tasks").innerHTML += `
<div id="${id}">${id} ${task.title} ${task.taskTime}
<button onclick="deleteTask(${id})">Delete</button>
</div>
    `;
}

function deleteTask(id) {
    document.getElementById(id).remove()
    taskList = taskList.splice(id)
}


