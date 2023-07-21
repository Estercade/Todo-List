export default class Task {
    constructor (title, description, dueDate, priority, notes, checked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = checked;
    }
};

const bdayParty = new Task('My Birthday Party', 'Throw a birthday party for yourself', '10/25/2023', 'High', '', 'false');

const bdayParty2 = new Task("Mom's Birthday Party", 'Throw a birthday party for Mom', '10/01/2023', 'High', '', 'true');

const tasksArray = []; 
tasksArray.push(bdayParty);
tasksArray.push(bdayParty2);

export { tasksArray };