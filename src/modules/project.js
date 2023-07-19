export default class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this._taskList = [];
        this._labelList = [];
    }

    addTask(task) {
        this._taskList.push(task);
    }

    getTasks() {
        return this._taskList;
    }

    removeTask(task) {
        const index = this._taskList.indexOf(task);
        this._taskList = this._taskList.splice(index, 1);
    }
}

var generic = new Project('Default', '');

const projectsArray = []; 
projectsArray.push(generic);

export { projectsArray };