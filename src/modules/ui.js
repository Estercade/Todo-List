import { projectsArray, unassigned } from './project.js';
import { addTask } from './task.js';
import editIcon from './assets/note-edit-outline.svg';
import deleteIcon from './assets/trash-can-outline.svg';

const taskDetailHandler = (function() {
    function showTaskDetails(e) {
        if (!e.target.children[1]) {
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
        inboxAddTaskBtn.addEventListener('click', addTaskRenderer.renderAddTaskForm);
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
            editTaskBtn.id = 'edit-task-btn';
            const editIconWrapper = document.createElement('img');
            editIconWrapper.src = editIcon;
            editTaskBtn.appendChild(editIconWrapper);
            element.appendChild(editTaskBtn);

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.type = 'button';
            deleteTaskBtn.id = 'delete-task-btn';
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


const addTaskRenderer = (function() {
    function renderAddTaskForm() {
        const addTaskFormWrapper = document.createElement('div');
        addTaskFormWrapper.id = 'add-task-form-wrapper';
        addTaskFormWrapper.classList.add('modal');
        const addTaskForm = document.createElement('div');
        addTaskForm.id = 'add-task-form';
        addTaskForm.classList.add('modal-content');

        const closeAddTaskFormBtn = document.createElement('span');
        closeAddTaskFormBtn.innerHTML = `&times;`;
        closeAddTaskFormBtn.id = 'add-task-form-close-btn'
        addTaskForm.append(closeAddTaskFormBtn);

        const addTaskFormTitle = document.createElement('p');
        addTaskFormTitle.innerText = 'Add a task';
        addTaskForm.append(addTaskFormTitle);

        const newTaskTitleLabel = document.createElement('label');
        newTaskTitleLabel.setAttribute('for', 'new-task-title');
        newTaskTitleLabel.innerText = 'Title: ';
        addTaskForm.append(newTaskTitleLabel);

        const newTaskTitleInput = document.createElement('input');
        newTaskTitleInput.type = 'text';
        newTaskTitleInput.id = 'new-task-title'
        newTaskTitleInput.name = 'new-task-title';
        newTaskTitleInput.required = 'true';
        addTaskForm.append(newTaskTitleInput);
        addTaskForm.append(document.createElement('br'));
        
        const newTaskDescriptionLabel = document.createElement('label');
        newTaskDescriptionLabel.setAttribute('for', 'new-task-description');
        newTaskDescriptionLabel.innerText = 'Description (optional): ';
        addTaskForm.append(newTaskDescriptionLabel);

        const newTaskDescriptionInput = document.createElement('textarea');
        newTaskDescriptionInput.id = 'new-task-description'
        newTaskDescriptionInput.name = 'new-task-description';
        newTaskDescriptionInput.setAttribute('rows', 3);
        newTaskDescriptionInput.setAttribute('cols', '50');
        addTaskForm.append(newTaskDescriptionInput);
        addTaskForm.append(document.createElement('br'));

        const newTaskDueDateLabel = document.createElement('label');
        newTaskDueDateLabel.setAttribute('for', 'new-task-due-date');
        newTaskDueDateLabel.for = 'new-task-due-date';
        newTaskDueDateLabel.innerText = 'Due date: ';
        addTaskForm.append(newTaskDueDateLabel);

        const newTaskDueDateInput = document.createElement('input');
        newTaskDueDateInput.type = 'datetime-local';
        newTaskDueDateInput.id = 'new-task-due-date'
        newTaskDueDateInput.name = 'new-task-due-date';
        newTaskDueDateInput.required = 'true';
        addTaskForm.append(newTaskDueDateInput);
        addTaskForm.append(document.createElement('br'));

        const newTaskPriorityLabel = document.createElement('label');
        newTaskPriorityLabel.setAttribute('for', 'new-task-priority');
        newTaskPriorityLabel.innerText = 'Priority: ';
        addTaskForm.append(newTaskPriorityLabel);

        const newTaskPrioritySelection = document.createElement('select');
        newTaskPrioritySelection.id = 'new-task-priority';
        newTaskPrioritySelection.name = 'new-task-priority';

        const newTaskPriorityNormal = document.createElement('option');
        newTaskPriorityNormal.value = 'Normal';
        newTaskPriorityNormal.innerText = 'Normal';
        newTaskPriorityNormal.selected = 'true';
        newTaskPrioritySelection.appendChild(newTaskPriorityNormal);

        const newTaskPriorityMedium = document.createElement('option');
        newTaskPriorityMedium.value = 'Medium';
        newTaskPriorityMedium.innerText = 'Medium';
        newTaskPrioritySelection.appendChild(newTaskPriorityMedium);

        const newTaskPriorityHigh = document.createElement('option');
        newTaskPriorityHigh.value = 'High';
        newTaskPriorityHigh.innerText = 'High';
        newTaskPrioritySelection.appendChild(newTaskPriorityHigh);
        addTaskForm.append(newTaskPrioritySelection);
        addTaskForm.append(document.createElement('br'));

        const newTaskNotesLabel = document.createElement('label');
        newTaskNotesLabel.setAttribute('for', 'new-task-notes');
        newTaskNotesLabel.innerText = 'Notes (optional): ';
        addTaskForm.append(newTaskNotesLabel);

        const newTaskNotesInput = document.createElement('textarea');
        newTaskNotesInput.id = 'new-task-notes';
        newTaskNotesInput.name = 'new-task-notes';
        newTaskNotesInput.setAttribute('rows', '3');
        newTaskNotesInput.setAttribute('cols', '50');
        addTaskForm.append(newTaskNotesInput);

        const newTaskSubmitBtn = document.createElement('button');
        newTaskSubmitBtn.type = 'button';
        newTaskSubmitBtn.id = 'new-task-submit-btn';
        newTaskSubmitBtn.innerText = 'Submit';
        addTaskForm.append(newTaskSubmitBtn);

        const closeAddTaskFormBtn2 = document.createElement('button');
        closeAddTaskFormBtn2.type = 'button';
        closeAddTaskFormBtn2.id = 'new-task-cancel-btn';
        closeAddTaskFormBtn2.innerText = 'Cancel';
        addTaskForm.append(closeAddTaskFormBtn2);

        newTaskSubmitBtn.addEventListener('click', addTask);
        newTaskSubmitBtn.addEventListener('click', inboxRenderer.updateInboxTasks);
        newTaskSubmitBtn.addEventListener('click', _closeAddTaskForm);

        closeAddTaskFormBtn.onclick = _closeAddTaskForm;
        closeAddTaskFormBtn2.onclick = _closeAddTaskForm;

        addTaskFormWrapper.appendChild(addTaskForm);
        const content = document.getElementById('main-content');
        content.append(addTaskFormWrapper);

        window.onclick = function(e) {
            if (e.target == addTaskFormWrapper) { 
                _closeAddTaskForm();
            };
        }
    }

    function _closeAddTaskForm() {
        const addTaskForm = document.getElementById('add-task-form-wrapper');
        addTaskForm.remove();
    }

    return { renderAddTaskForm };
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