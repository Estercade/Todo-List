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
    const newTaskTitle = document.getElementById('task-title-input').value;
    const newTaskDescription = document.getElementById('task-description-input').value;
    const newTaskDueDate = document.getElementById('task-due-date-input').value;
    const newTaskPriority = document.getElementById('task-priority-input').value;
    const newTaskNotes = document.getElementById('task-notes-input').value;

    // New tasks will be unchecked (marked as incomplete) by default
    unassigned.addTask(
        new Task(
            newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority, newTaskNotes, 'false'
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