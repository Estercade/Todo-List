import { projectsArray, unassigned } from './project.js';
import { tasksArray } from './task.js';

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

const mainContentHandler = (function() {
    const mainContent = document.getElementById('main-content');

    return
})();

const inboxRenderer = (function() {
    const mainContent = document.getElementById('main-content');

    function renderInbox() {
        const inboxTitle = document.createElement('h3');
        inboxTitle.innerText = 'Inbox';
        mainContent.appendChild(inboxTitle);
        
        const inboxTasksList = document.createElement('ul');
        inboxTasksList.id = 'inbox-tasks-list';
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

            inboxTasksList.appendChild(element);
            element.addEventListener('click', taskDetailHandler.showTaskDetails);
        })
        mainContent.appendChild(inboxTasksList);
    }

    renderInbox();

    return { renderInbox }
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