// ADD TASK START
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const showFormBtn = document.getElementById("show-task-form");
    const taskList = document.getElementById("task-list");
    showFormBtn.addEventListener("click", () => {
        taskForm.style.display = taskForm.style.display === "none" ? "block" : "none";
    });
    function loadTasks() {
        fetch("load_tasks.php")
            .then(res => res.json())
            .then(tasks => {
                taskList.innerHTML = "";
                tasks.forEach(task => {
                    const item = document.createElement("div");
                    item.className = "task-item";
                    item.innerHTML = `
                        <h3>${task.title}</h3>
                        <p>${task.description}</p>
                        <p><small>Due: ${task.due_date}</small></p>
                        <div class="task-actions">
                            <button class="btn btn-primary" data-id="${task.id}">Edit</button>
                            <button class="btn btn-danger" data-id="${task.id}">Delete</button>
                        </div>
                    `;
                    taskList.appendChild(item);
                });
            });
    }
    loadTasks();
});