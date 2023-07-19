export default class Task {
    constructor (title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
};

const bdayParty = new Task('My Birthday Party', 'Throw a birthday party for yourself', '10/25/2023', 'high', '', '');

const bdayParty2 = new Task("Mom's Birthday Party", 'Throw a birthday party for Mom', '10/01/2023', 'high', '', '');

const tasksArray = []; 
tasksArray.push(bdayParty);
tasksArray.push(bdayParty2);

export { tasksArray };