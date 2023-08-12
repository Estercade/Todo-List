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

const bdayParty = new Task('My Birthday Party', 'Throw a birthday party for yourself', new Date('October 25, 2023 00:00'), 'High', '', 'false');

const bdayParty2 = new Task("Mom's Birthday Party", 'Throw a birthday party for Mom', new Date('October 1, 2023 00:00'), 'High', '', 'true');

unassigned.addTask(bdayParty);
unassigned.addTask(bdayParty2);

export function addTask() {
    const formTitle = document.getElementById('new-task-title').value;
    const formDescription = document.getElementById('new-task-description').value;
    const formDueDate = document.getElementById('new-task-due-date').value;
    const formPriority = document.getElementById('new-task-priority').value;
    const formNotes = document.getElementById('new-task-notes').value;

    // New tasks will by default be unchecked (marked as incomplete)
    unassigned.addTask(
        new Task(
            formTitle, formDescription, formDueDate, formPriority, formNotes, 'false'
        )
    )
}