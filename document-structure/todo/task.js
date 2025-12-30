const buttonAdd = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

buttonAdd.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.preventDefault();
        e.target.closest('.task').remove();
    }
});

function addTask(e) {
    if (e) e.preventDefault();
   
    const taskText = input.value.trim();
    if (!taskText) return;
   
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = taskText;

    const removeButton = document.createElement('a');
    removeButton.href = '#';
    removeButton.className = 'task__remove';
    removeButton.innerHTML = '&times;';

    removeButton.addEventListener('click', function(event) {
      event.preventDefault();
      taskElement.remove();
    });

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(removeButton);
   
    taskList.appendChild(taskElement);
    input.value = '';
    input.focus();
}