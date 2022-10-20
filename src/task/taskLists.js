import _ from 'lodash';


export const lists = {
  allTasks: [],
  tasksToDisplay: [],

  addToAllTasks(task) {
    this.allTasks.push(task);
    return this;
  },

  addToDisplayedTasks(task) {
    this.tasksToDisplay.push(task);
    return this;
  },

  toggleCompleted(index) {
    if (this.allTasks[index].completed === true) {
      this.allTasks[index].completed = false;
    } else {
      this.allTasks[index].completed = true;
    }
  },

  editTitle(index, newTitle) {
    this.allTasks[index].title = newTitle;
  },

  editDueDate(index, newDueDate) {
    this.allTasks[index].dueDate = newDueDate;
  },

  editDueTime(index, newDueTime) {
    this.allTasks[index].dueTime = newDueTime;
  },

  editPriority(index, newPriority) {
    this.allTasks[index].priority = newPriority;
  },

  editProject(index, newProject) {
    this.allTasks[index].project = newProject;
  },

  editDescription(index, newDescription) {
    this.allTasks[index].description = newDescription;
  },

  deleteTask(index) {
    this.allTasks.splice(index, 1);
  },
}

