import { projectsArray } from './project.js';
import { tasksArray } from './task.js';

const pageRenderer = (function() {
    const content = document.getElementById('content');
    const header = document.getElementById('header');
    const nav = document.getElementById('nav');

    function initializeUI() {
        const headerWrapper = document.createElement('div');
        headerWrapper.id = 'header-wrapper';
        header.appendChild(headerWrapper);
        _renderNavHeader();

        const projectsWrapper = document.createElement('div');
        projectsWrapper.id = 'projects-wrapper';
        nav.appendChild(projectsWrapper);
        _renderNavProjects();

        const tasksWrapper = document.createElement('div');
        tasksWrapper.id = 'tasks-wrapper';
        nav.appendChild(tasksWrapper);
        _renderNavTasks();
    };

    function _renderNavHeader() {           
        const headerWrapper = document.getElementById('header-wrapper');

        const headerWrapperTitle = document.createElement('h3');
        headerWrapperTitle.innerText = 'Todo List';
        headerWrapper.appendChild(headerWrapperTitle);
    };

    function _renderNavProjects() {
        const projectsWrapper = document.getElementById('projects-wrapper');
        const projectsWrapperTitle = document.createElement('h3');
        projectsWrapperTitle.innerText = 'Projects';
        projectsWrapper.appendChild(projectsWrapperTitle);

        const projectsList = document.createElement('ul');
        projectsArray.forEach((project) => {
            const element = document.createElement('li');
            element.innerText = project.title;
            projectsList.appendChild(element);
        })

        projectsWrapper.appendChild(projectsList);
    }

    function updateNavProjects() {
        const projectsWrapper = document.getElementById('projects-wrapper');
        while (projectsWrapper.firstChild) {
            projectsWrapper.removeChild(projectsWrapper.firstChild);
        }
        _renderNavProjects();
    }

    function _renderNavTasks() {
        const tasksWrapper = document.getElementById('tasks-wrapper');
        const tasksWrapperTitle = document.createElement('h3');
        tasksWrapperTitle.innerText = 'Tasks';
        tasksWrapper.appendChild(tasksWrapperTitle);
    
        const tasksList = document.createElement('ul');
        tasksArray.forEach((task) => {
            const element = document.createElement('li');
            element.innerText = task.title;
            tasksList.appendChild(element);
        })
        
        tasksWrapper.appendChild(tasksList);
    }

    function updateNavTasks() {
        console.log('click');
        const tasksWrapper = document.getElementById('tasks-wrapper');
        while (tasksWrapper.firstChild) {
            tasksWrapper.removeChild(tasksWrapper.firstChild);
        }
        _renderNavTasks();
    }

    initializeUI();

    return { initializeUI, updateNavProjects, updateNavTasks };
})();

const updateBtn = document.createElement('button');
updateBtn.type = 'button';
updateBtn.innerText = 'Update Nav Projects';
nav.appendChild(updateBtn);
updateBtn.addEventListener('click', pageRenderer.updateNavTasks);