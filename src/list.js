import { formatISO } from "date-fns";
import { enGB } from 'date-fns/locale';
const locales = {enGB};
import _ from 'lodash';


export class Task {
  constructor(title, dueDate, dueTime, alert, repeat, ends, endDate, priority, project, description, completed) {
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
  uncompletedTasks: [],
  todaysTasks: [],
  nextWeeksTasks: [],
  noDueDateTasks: [],
  completedTasks: [],
  pastTasks: [],

  addToAllTasks(task) {
    this.allTasks.push(task);
    return this;
  },

  addToTodaysTasks(task) {
    this.todaysTasks.push(task);
    return this;
  },

  addToNextWeeksTask(task) {
    this.nextWeeksTasks.push(task);
    return this;
  },

  addToNoDueDateTasks(task) {
    this.noDueDateTasks.push(task);
    return this;
  },

  addToUncompletedTasks(task) {
    this.uncompletedTasks.push(task);
    return this;
  },

  addToCompletedTasks(task) {
    this.completedTasks.push(task);
    return this;
  },

  addToPastTasks(task) {
    this.pastTasks.push(task);
    return this;
  },
  
  clearLists() {
    this.uncompletedTasks = [];
    this.todaysTasks = [];
    this.nextWeeksTasks = [];
    this.noDueDateTasks = [];
    this.completedTasks = [];
  }
}
