import { projectsArray, unassigned } from './project.js';
import { addTask, updateTask } from './task.js';
import editIcon from './assets/note-edit-outline.svg';
import deleteIcon from './assets/trash-can-outline.svg';

const navRenderer = (function() {
    const nav = document.getElementById('nav');

    function renderNav() {
        _renderInboxWrapper();
        _renderTodayWrapper();
        _renderThisWeekWrapper();
        _renderProjectsWrapper();
    }

    function _renderInboxWrapper() {
        const inboxBtnWrapper = document.createElement('div');
        const inboxBtn = document.createElement('button');
        inboxBtn.type = 'button';
        inboxBtn.innerText = 'Inbox';
        inboxBtnWrapper.appendChild(inboxBtn);
        nav.appendChild(inboxBtnWrapper);
    }

    function _renderTodayWrapper() {
        const todayBtnWrapper = document.createElement('div');
        const todayBtn = document.createElement('button');
        todayBtn.type = 'button';
        todayBtn.innerText = 'Today';
        todayBtnWrapper.appendChild(todayBtn);
        nav.appendChild(todayBtnWrapper);
    }

    function _renderThisWeekWrapper() {
        const thisWeekBtnWrapper = document.createElement('div');
        const thisWeekBtn = document.createElement('button');
        thisWeekBtn.type = 'button';
        thisWeekBtn.innerText = 'This Week';
        thisWeekBtnWrapper.appendChild(thisWeekBtn);
        nav.appendChild(thisWeekBtnWrapper);
    }

    function _renderProjectsWrapper() {
        const projectsWrapper = document.createElement('div');
        projectsWrapper.id = 'projects-wrapper';
        projectsWrapper.innerText = 'Projects';
        const projectsList = document.createElement('ul');
        projectsList.id = 'projects-list';
        projectsWrapper.appendChild(projectsList);

        nav.appendChild(projectsWrapper);
        _renderNavProjects();
    }

    function _renderNavProjects() {
        const projectsList = document.getElementById('projects-list');
        projectsArray.forEach((project) => {
            const element = document.createElement('li');
            element.innerText = project.title;
            projectsList.appendChild(element);
        })
    }

    function updateNavProjects() {
        const projectsList = document.getElementById('projects-list');
        while (projectsList.firstChild) {
            projectsList.removeChild(projectsList.firstChild);
        }
        _renderNavProjects();
    }

    return { renderNav, updateNavProjects }
})();

const taskDetailHandler = (function() {
    function showTaskDetails(e) {
        // e.target.children[1] is checkbox, [2] is editBtn, [3] is deleteBtn
        if (!e.target.children[3]) {
            // e.target.id is the index of the task
            // in the tasklist array of the project
            const taskDetailsList = document.createElement('ul');
            taskDetailsList.id = `task-${e.target.id}-details-list`;
            // stopPropagation prevents child elements
            // from triggering showTaskDetails function
            taskDetailsList.addEventListener('click', function stopPropagation(e) {
                e.stopPropagation();
            });
            
            const taskDetailsDescription = document.createElement('li');
            taskDetailsDescription.innerText = `Description:\n${unassigned.tasksList[e.target.id].description}`;
            taskDetailsList.appendChild(taskDetailsDescription);

            const taskDetailsDueDate = document.createElement('li');
            taskDetailsDueDate.innerText = `Due date:\n${unassigned.tasksList[e.target.id].dueDate}`;
            taskDetailsList.appendChild(taskDetailsDueDate);

            const taskDetailsPriority = document.createElement('li');
            taskDetailsPriority.innerText = `Priority:\n${unassigned.tasksList[e.target.id].priority}`;
            taskDetailsList.appendChild(taskDetailsPriority);

            const taskDetailsNotes = document.createElement('li');
            taskDetailsNotes.innerText = `Notes:\n${unassigned.tasksList[e.target.id].notes}`;
            taskDetailsList.appendChild(taskDetailsNotes);

            e.target.appendChild(taskDetailsList);
        } else {
            e.target.removeChild(document.getElementById(`task-${e.target.id}-details-list`));
        }
    }

    return { showTaskDetails};
})();

const inboxRenderer = (function() {
    const mainContent = document.getElementById('main-content');

    function renderInbox() {
        const inboxTitle = document.createElement('h3');
        inboxTitle.innerText = 'Inbox';
        mainContent.appendChild(inboxTitle);

        const inboxAddTaskBtn = document.createElement('button');
        inboxAddTaskBtn.type = 'button';
        inboxAddTaskBtn.id = 'inbox-add-task-btn';
        inboxAddTaskBtn.innerText = 'Add a task';
        inboxAddTaskBtn.addEventListener('click', taskFormRenderer.renderAddTaskForm);
        mainContent.appendChild(inboxAddTaskBtn);
        
        const inboxTasksList = document.createElement('ul');
        inboxTasksList.id = 'inbox-tasks-list';
        _renderInboxTasks(inboxTasksList);

        mainContent.appendChild(inboxTasksList);
    }

    function _renderInboxTasks(inboxTasksList) {
        unassigned.tasksList.forEach((task) => {
            const element = document.createElement('li');
            element.innerText = task.title;
            element.id = unassigned.tasksList.indexOf(task);

            const taskCheckbox = document.createElement('input');
            taskCheckbox.type = 'checkbox';
            if (task.checked == 'true') { 
                taskCheckbox.checked = 'checked';
            };
            element.appendChild(taskCheckbox);

            const editTaskBtn = document.createElement('button');
            editTaskBtn.type = 'button';
            editTaskBtn.classList.add('edit-task-btn');
            const editIconWrapper = document.createElement('img');
            editIconWrapper.src = editIcon;

            editTaskBtn.appendChild(editIconWrapper);
            // stopPropagation prevents child elements
            // from triggering showTaskDetails function
            editTaskBtn.addEventListener('click', function stopPropagation(e) {
                e.stopPropagation();
            });
            editTaskBtn.addEventListener('click', taskFormRenderer.renderEditTaskForm);
            element.appendChild(editTaskBtn);

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.type = 'button';
            deleteTaskBtn.classList.add('delete-task-btn');
            const deleteIconWrapper = document.createElement('img');
            deleteIconWrapper.src = deleteIcon;
            deleteTaskBtn.appendChild(deleteIconWrapper);
            element.appendChild(deleteTaskBtn);

            inboxTasksList.appendChild(element);
            element.addEventListener('click', taskDetailHandler.showTaskDetails);
        })
    }

    function updateInboxTasks() {
        const inboxTasksList = document.getElementById('inbox-tasks-list');
        while (inboxTasksList.firstChild) {
            inboxTasksList.removeChild(inboxTasksList.firstChild);
        }
        _renderInboxTasks(inboxTasksList);
    }

    return { renderInbox, updateInboxTasks }
})();

const taskFormRenderer = (function() {
    function renderAddTaskForm() {
        _renderTaskForm('Add a task', '', '', '', '');

        // Tasks are normal priority by default
        const taskPriorityNormal = document.getElementById('task-priority-normal');
        taskPriorityNormal.selected = 'true';

        const taskSubmitBtn = document.getElementById('task-submit-btn');
        taskSubmitBtn.addEventListener('click', addTask);
        taskSubmitBtn.addEventListener('click', inboxRenderer.updateInboxTasks);
        taskSubmitBtn.addEventListener('click', _closeTaskForm);
    }

    function renderEditTaskForm(e) {
        // parentElement of icon is the button
        // parentElement of the button is the task item
        const task = unassigned.tasksList[e.target.parentElement.parentElement.id];
        console.log(task);
        _renderTaskForm('Edit task', task.title, task.description, task.dueDate, task.notes);
        
        switch (task.priority) {
            case 'Normal':
                const taskPriorityNormal = document.getElementById('task-priority-normal');
                taskPriorityNormal.selected = 'true';
                break;
            case 'Medium':
                const taskPriorityMedium = document.getElementById('task-priority-medium');
                taskPriorityMedium.selected = 'true';    
                break;
            case 'High':
                console.log('high');
                const taskPriorityHigh = document.getElementById('task-priority-high');
                taskPriorityHigh.selected = 'true';
                break;
        }

        const taskSubmitBtn = document.getElementById('task-submit-btn');
        taskSubmitBtn.addEventListener('click', function(e) {
            updateTask(task);
        });
        taskSubmitBtn.addEventListener('click', inboxRenderer.updateInboxTasks);
        taskSubmitBtn.addEventListener('click', _closeTaskForm);
    }

    function _renderTaskForm(formTitle, taskTitle, taskDescription, taskDueDate, taskNotes) {
        const taskFormWrapper = document.createElement('div');
        taskFormWrapper.id = 'task-form-wrapper';
        taskFormWrapper.classList.add('modal');
        const taskForm = document.createElement('div');
        taskForm.id = 'task-form';
        taskForm.classList.add('modal-content');

        const closeTaskFormBtn = document.createElement('span');
        closeTaskFormBtn.innerHTML = `&times;`;
        closeTaskFormBtn.id = 'task-form-close-btn'
        taskForm.append(closeTaskFormBtn);

        const taskFormTitle = document.createElement('p');
        taskFormTitle.innerText = formTitle;
        taskForm.append(taskFormTitle);

        const taskTitleLabel = document.createElement('label');
        taskTitleLabel.setAttribute('for', 'task-title');
        taskTitleLabel.innerText = 'Title: ';
        taskForm.append(taskTitleLabel);

        const taskTitleInput = document.createElement('input');
        taskTitleInput.type = 'text';
        taskTitleInput.id = 'task-title'
        taskTitleInput.name = 'task-title';
        taskTitleInput.required = 'true';
        taskTitleInput.value = taskTitle;
        taskForm.append(taskTitleInput);
        taskForm.append(document.createElement('br'));
        
        const taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.setAttribute('for', 'task-description');
        taskDescriptionLabel.innerText = 'Description (optional): ';
        taskForm.append(taskDescriptionLabel);

        const taskDescriptionInput = document.createElement('textarea');
        taskDescriptionInput.id = 'task-description'
        taskDescriptionInput.name = 'task-description';
        taskDescriptionInput.value = taskDescription;
        taskDescriptionInput.setAttribute('rows', 3);
        taskDescriptionInput.setAttribute('cols', '50');
        taskForm.append(taskDescriptionInput);
        taskForm.append(document.createElement('br'));

        const taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.setAttribute('for', 'task-due-date');
        taskDueDateLabel.for = 'task-due-date';
        taskDueDateLabel.innerText = 'Due date: ';
        taskForm.append(taskDueDateLabel);

        const taskDueDateInput = document.createElement('input');
        taskDueDateInput.type = 'datetime-local';
        taskDueDateInput.id = 'task-due-date'
        taskDueDateInput.name = 'task-due-date';
        taskDueDateInput.value = taskDueDate;
        taskDueDateInput.required = 'true';
        taskForm.append(taskDueDateInput);
        taskForm.append(document.createElement('br'));

        const taskPriorityLabel = document.createElement('label');
        taskPriorityLabel.setAttribute('for', 'task-priority');
        taskPriorityLabel.innerText = 'Priority: ';
        taskForm.append(taskPriorityLabel);

        const taskPrioritySelection = document.createElement('select');
        taskPrioritySelection.id = 'task-priority';
        taskPrioritySelection.name = 'task-priority';

        const taskPriorityNormal = document.createElement('option');
        taskPriorityNormal.value = 'Normal';
        taskPriorityNormal.innerText = 'Normal';
        taskPriorityNormal.id = 'task-priority-normal';
        taskPrioritySelection.appendChild(taskPriorityNormal);

        const taskPriorityMedium = document.createElement('option');
        taskPriorityMedium.value = 'Medium';
        taskPriorityMedium.innerText = 'Medium';
        taskPriorityMedium.id = 'task-priority-medium';
        taskPrioritySelection.appendChild(taskPriorityMedium);

        const taskPriorityHigh = document.createElement('option');
        taskPriorityHigh.value = 'High';
        taskPriorityHigh.innerText = 'High';
        taskPriorityHigh.id = 'task-priority-high';
        taskPrioritySelection.appendChild(taskPriorityHigh);
        taskForm.append(taskPrioritySelection);
        taskForm.append(document.createElement('br'));

        const taskNotesLabel = document.createElement('label');
        taskNotesLabel.setAttribute('for', 'task-notes');
        taskNotesLabel.innerText = 'Notes (optional): ';
        taskForm.append(taskNotesLabel);

        const taskNotesInput = document.createElement('textarea');
        taskNotesInput.id = 'task-notes';
        taskNotesInput.name = 'task-notes';
        taskNotesInput.value = taskNotes;
        taskNotesInput.setAttribute('rows', '3');
        taskNotesInput.setAttribute('cols', '50');
        taskForm.append(taskNotesInput);

        const taskSubmitBtn = document.createElement('button');
        taskSubmitBtn.type = 'button';
        taskSubmitBtn.id = 'task-submit-btn';
        taskSubmitBtn.innerText = 'Submit';
        taskForm.append(taskSubmitBtn);

        const closeTaskFormBtn2 = document.createElement('button');
        closeTaskFormBtn2.type = 'button';
        closeTaskFormBtn2.id = 'new-task-cancel-btn';
        closeTaskFormBtn2.innerText = 'Cancel';
        taskForm.append(closeTaskFormBtn2);

        closeTaskFormBtn.onclick = _closeTaskForm;
        closeTaskFormBtn2.onclick = _closeTaskForm;

        taskFormWrapper.appendChild(taskForm);
        const content = document.getElementById('main-content');
        content.append(taskFormWrapper);

        window.onclick = function(e) {
            if (e.target == taskFormWrapper) { 
                _closeTaskForm();
            };
        }
    }

    function _closeTaskForm() {
        const taskForm = document.getElementById('task-form-wrapper');
        taskForm.remove();
    }

    return { renderAddTaskForm, renderEditTaskForm };
})();

const mainContentHandler = (function() {
    const mainContent = document.getElementById('main-content');
    inboxRenderer.renderInbox();

    return;
})();

const UIrenderer = (function() {
    const content = document.getElementById('content');
    const header = document.getElementById('header');

    function initializeUI() {
        _renderHeader();
        navRenderer.renderNav();
    };

    function _renderHeader() {           
        const headerWrapper = document.createElement('div');
        headerWrapper.id = 'header-wrapper';
        header.appendChild(headerWrapper);

        const headerWrapperTitle = document.createElement('h3');
        headerWrapperTitle.innerText = 'Todo List';
        headerWrapper.appendChild(headerWrapperTitle);
    };

    initializeUI();

    return {  };
})();

const updateBtn = document.createElement('button');
updateBtn.type = 'button';
updateBtn.innerText = 'Update Nav Projects';
nav.appendChild(updateBtn);
updateBtn.addEventListener('click', navRenderer.updateNavTasks);