document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const priorityInput = document.getElementById('priority-input');
    const taskText = taskInput.value;
    const taskPriority = priorityInput.value;

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        newTask.remove();
    });

    newTask.appendChild(deleteButton);

    if (taskPriority === 'high') {
        document.getElementById('high-list').appendChild(newTask);
    } else if (taskPriority === 'medium') {
        document.getElementById('medium-list').appendChild(newTask);
    } else {
        document.getElementById('low-list').appendChild(newTask);
    }

    taskInput.value = '';
    taskInput.focus();
});