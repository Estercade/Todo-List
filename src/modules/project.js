export default class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasksList = [];
    }

    addTask(task) {
        this.tasksList.push(task);
    }

    getTasks() {
        return this.tasksList;
    }

    removeTask(task) {
        const index = this.tasksList.indexOf(task);
        this.tasksList = this.tasksList.splice(index, 1);
    }
}

var unassigned = new Project('Default', '');

const projectsArray = []; 
projectsArray.push(unassigned);

export function addProject() {
    const newProjectTitle = document.getElementById('project-title-input').value;
    const newProjectDescription = document.getElementById('project-description-input').value;

    projectsArray.push(new Project(newProjectTitle, newProjectDescription));
}

export { projectsArray, unassigned };