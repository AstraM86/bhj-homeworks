const buttonAdd = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');

// Обработчик отправки формы, включая Enter
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

// Один обработчик для удаления всех задач
taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});

function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;
   
    // Шаблонную строку для создания элемента
    taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskText}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);
   
    input.value = '';
    input.focus();
}

/*const buttonAdd = document.getElementById('tasks__add');
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
}*/