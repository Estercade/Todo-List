import { projectsArray, unassigned } from './project.js';

export default class Task {
    constructor (title, description, dueDate, priority, notes, checked, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = checked;
    }
};

const bdayParty = new Task('My Birthday Party', 'Throw a birthday party for yourself', '2023-10-25T00:00', 'High', '', 'false');

const bdayParty2 = new Task("Mom's Birthday Party", 'Throw a birthday party for Mom', '2023-10-01T00:00', 'High', '', 'true');

unassigned.addTask(bdayParty);
unassigned.addTask(bdayParty2);

export function addTask() {
    const formTitle = document.getElementById('task-title').value;
    const formDescription = document.getElementById('task-description').value;
    const formDueDate = document.getElementById('task-due-date').value;
    const formPriority = document.getElementById('task-priority').value;
    const formNotes = document.getElementById('task-notes').value;

    // New tasks will by default be unchecked (marked as incomplete)
    unassigned.addTask(
        new Task(
            formTitle, formDescription, formDueDate, formPriority, formNotes, 'false'
        )
    )
}

export function updateTask(task) {
    const taskIndex = unassigned.tasksList.indexOf(task);

    const formTitle = document.getElementById('task-title').value;
    const formDescription = document.getElementById('task-description').value;
    const formDueDate = document.getElementById('task-due-date').value;
    const formPriority = document.getElementById('task-priority').value;
    const formNotes = document.getElementById('task-notes').value;

    unassigned.tasksList[taskIndex].title = formTitle;
    unassigned.tasksList[taskIndex].description = formDescription;
    unassigned.tasksList[taskIndex].dueDate = formDueDate;
    unassigned.tasksList[taskIndex].priority = formPriority;
    unassigned.tasksList[taskIndex].notes = formNotes;
}