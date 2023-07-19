import { projectsArray } from './project.js';
import { tasksArray } from './task.js';

const content = document.getElementById('content');

export function renderHeader() {
    const headerWrapper = document.createElement('div');
    headerWrapper.id = 'header-wrapper';

    headerWrapper.innerText = 'Todo List';

    content.appendChild(headerWrapper);
};

export function renderProjects() {
    const projectsWrapper = document.createElement('div');
    projectsWrapper.id = 'projects-wrapper';

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

    content.appendChild(projectsWrapper);
}

export function renderTasks() {
    const tasksWrapper = document.createElement('div');
    tasksWrapper.id = 'task-wrapper';

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

    content.appendChild(tasksWrapper);
}

renderHeader();
renderProjects();
renderTasks();