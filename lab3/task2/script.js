document.addEventListener("DOMContentLoaded", function() {
    // Initialize task list
    let tasks = [];

    // Function to render tasks
    function renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.className = "task-item";
            listItem.innerHTML = `
                <input type="checkbox" id="task${index}" onchange="toggleDone(${index})" ${task.done ? 'checked' : ''}>
                <label for="task${index}" class="${task.done ? 'done' : ''}">${task.text}</label>
                <button onclick="deleteTask(${index})" class="delete-btn"><i class="fas fa-trash-alt"></i></button>

            `;
            taskList.appendChild(listItem);
        });
    }

    // Function to add a new task
    window.addTask = function() {
        const taskInput = document.getElementById("taskInput");
        const newTask = taskInput.value.trim();

        if (newTask !== "") {
            tasks.push({ text: newTask, done: false });
            taskInput.value = "";
            renderTasks();
        }
    };

    // Function to toggle task as done/undone
    window.toggleDone = function(index) {
        tasks[index].done = !tasks[index].done;
        renderTasks();
    };

    // Function to delete a task
    window.deleteTask = function(index) {
        tasks.splice(index, 1);
        renderTasks();
    };

    // Initial render
    renderTasks();
});
