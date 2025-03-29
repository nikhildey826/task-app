document.getElementById('taskInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.classList.add('task-item');


    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    textSpan.classList.add('task-text');

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');


    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fas', 'fa-check');

    const crossIcon=document.createElement('i');
    crossIcon.classList.add('fas','fa-times');
    crossIcon.style.display = 'none';

    checkIcon.onclick = function () {
        if (li.classList.contains('completed')) {
            li.classList.remove('completed');
             crossIcon.style.display='none';
             checkIcon.style.display='block';

        } else {
            li.classList.add('completed');
            checkIcon.style.display='none';
            crossIcon.style.display='block';
        }
    };


    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash');
    trashIcon.onclick = function () {
        taskList.removeChild(li);
    };

 
    iconContainer.appendChild(checkIcon);
    iconContainer.appendChild(crossIcon);
    iconContainer.appendChild(trashIcon);

    li.appendChild(textSpan);
    li.appendChild(iconContainer);

 
    taskList.appendChild(li);

    taskInput.value = '';
}
