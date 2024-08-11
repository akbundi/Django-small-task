document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById('taskList');

    // Sample dynamic data
    const tasks = [
        { id: 1, text: 'Buy groceries' },
        { id: 2, text: 'Finish project' },
        { id: 3, text: 'Clean the house' }
    ];

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        taskList.appendChild(listItem);
    });
});
