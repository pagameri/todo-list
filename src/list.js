import { formatISO } from "date-fns";
import { enGB } from 'date-fns/locale';
const locales = {enGB};
import _ from 'lodash';


export class Task {
  constructor(id, title, dueDate, dueTime, alert, repeat, ends, endDate, priority, project, description, completed) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.alert = alert;
    this.repeat = repeat;
    this.ends = ends;
    this.endDate = endDate;
    this.priority = priority;
    this.project = project;
    this.description = description;
    this.completed = completed;
  }

  get fullDate() {
    const date = this.dueDate;
    const time = this.dueTime;
    let dateParts, timeParts;
    if (date === '') {
      return 'no-date'
    } else {
      dateParts = date.split('-');
    }
    if (time === '') {
      timeParts = ['09', '00'];
    } else {
      timeParts = time.split(':');
    }
    return formatISO(new Date(dateParts[0], dateParts[1]-1, dateParts[2], timeParts[0], timeParts[1]));
  }
}


export let lists = {
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

  toggleCompleted(tableIndex) {
    let taskId = this.tasksToDisplay[tableIndex].id;
    let taskIndex = _.findIndex(this.allTasks, {'id': taskId});
    if (this.allTasks[taskIndex].completed === true) {
      this.allTasks[taskIndex].completed = false;
    } else {
      this.allTasks[taskIndex].completed = true;
    }
  },


  deleteTask(tableIndex) {
    console.log(this.allTasks);
    let taskId = this.tasksToDisplay[tableIndex].id;
    let taskIndex = _.findIndex(this.allTasks, {'id': taskId});
    this.allTasks.splice(taskIndex, 1);
    console.log(this.allTasks);
  },
}
