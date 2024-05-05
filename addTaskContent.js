let selectedPriority = 'Medium';
let selectedSubtask = 0;

function selectActivePriority(priority) {
    clearActivePriority();
    selectedPriority = priority;
    document.getElementById(`addTaskPriority${priority}`).classList.add(`priority${priority}Active`);
    document.getElementById(`addTaskPriority${priority}Icon`).src = `img/icon/priority${priority}White.svg`;
}

function clearActivePriority() {
    document.getElementById('addTaskPriorityUrgent').classList.remove('priorityUrgentActive');
    document.getElementById('addTaskPriorityMedium').classList.remove('priorityMediumActive');
    document.getElementById('addTaskPriorityLow').classList.remove('priorityLowActive');
    document.getElementById('addTaskPriorityUrgentIcon').src = '/img/icon/priorityUrgent.svg';
    document.getElementById('addTaskPriorityMediumIcon').src = '/img/icon/priorityMedium.svg';
    document.getElementById('addTaskPriorityLowIcon').src = '/img/icon/priorityLow.svg';
}

function addNewTask() {
    const newTaskTitle = document.getElementById('newTaskTitle').value;
    const newTaskDescription = document.getElementById('newTaskDescription').value;
    const newTaskAssigned = document.getElementById('newTaskAssigned').value;
    const newTaskDate = document.getElementById('newTaskDate').value;
    const newTaskPriority = selectedPriority;
    const newTaskCategory = document.getElementById('newTaskCategory').value;
    // const newTaskSubtasks = document.getElementById('newTaskSubtasks').value;
    addNewTaskJSON(newTaskTitle, newTaskDescription, newTaskAssigned, newTaskDate, newTaskPriority, newTaskCategory,
        // newTaskSubtasks
    );
}

function addNewTaskJSON(newTaskTitle, newTaskDescription, newTaskAssigned, newTaskDate, newTaskPriority, newTaskCategory, newTaskSubtasks) {
    let newTask = {
        "title": newTaskTitle,
        "description": newTaskDescription,
        "category": newTaskCategory,
        "subtasks": newTaskSubtasks,
        "assigned": newTaskAssigned,
        "priority": newTaskPriority,
        "date": newTaskDate
    };
    tasks['tasksToDo'].push(newTask);
}

function addTaskClear() {
    document.getElementById('newTaskTitle').value = '';
    document.getElementById('newTaskDescription').value = '';
    document.getElementById('newTaskAssigned').selectedIndex = 0;
    document.getElementById('newTaskDescription').value = '';
    document.getElementById('newTaskDate').value = '';
    document.getElementById('newTaskAssigned').selectedIndex = 0;
    document.getElementById('addedSubTasks').innerHTML = '';
    document.getElementById('newTaskCategory').value = 'Select task category';
    selectedSubtask = 0;
    clearSubTask();
    resetSubtaskIcons();
    selectActivePriority('Medium');
}

function loadSubTask() {
    if (subtasks[selectedSubtask]) {
        document.getElementById('subtasksField').style.color = '#000';
        document.getElementById('subtasksField').innerHTML = `${subtasks[selectedSubtask]}`;
        document.getElementById('subtasksPlus').classList.add('d-none');
        document.getElementById('subtasksCross').classList.remove('d-none');
        document.getElementById('subtasksCheckmark').classList.remove('d-none');
    }
}

function addSubTask() {
    document.getElementById('addedSubTasks').innerHTML += `<p>${subtasks[selectedSubtask]}</p>`;
    document.getElementById('subtasksField').style.color = '#D1D1D1';
    document.getElementById('subtasksField').innerHTML = `Add new task`;
    resetSubtaskIcons();
    selectedSubtask++;
}

function clearSubTask() {
    resetSubtaskIcons();
    document.getElementById('subtasksField').style.color = '#D1D1D1';
    document.getElementById('subtasksField').innerHTML = `Add new task`;
}

function resetSubtaskIcons() {
    if (selectedSubtask < (subtasks.length - 1)) {
        document.getElementById('subtasksPlus').classList.remove('d-none');
    }
    document.getElementById('subtasksCross').classList.add('d-none');
    document.getElementById('subtasksCheckmark').classList.add('d-none');
}