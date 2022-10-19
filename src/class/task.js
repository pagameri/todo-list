import { formatISO } from "date-fns";
import { enGB } from 'date-fns/locale';
const locales = {enGB};

export default class Task {
  constructor(id, title, dueDate, dueTime, priority, project, description) {
    this._id = id;
    this._title = title;
    this._dueDate = dueDate;
    this._dueTime = dueTime;
    this._priority = priority;
    this._project = project;
    this._description = description;
    this._completed = false;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (value) {
      this._id = value;
    }
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value) {
      this._title = value;
    }
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    if (value) {
      this._dueDate = value;
    } 
  }

  get dueTime() {
    return this._dueTime;
  }

  set dueTime(value) {
    if (value) {
      this._dueTime = value;
    } 
  }

  get fullDate() {
    const date = this._dueDate;
    const time = this._dueTime;
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

  get priority() {
    return this._priority;
  }

  set priority(value) {
    if (value) {
      this._priority = value;
    }
  }

  get project() {
    return this._project;
  }

  set project(value) {
    if (value) {
      this._project = value;
    }
  }

  get description() {
    return this._description;
  }

  set description(value) {
    if (value) {
      this._description = value;
    }
  }

  get completed() {
    return this._completed;
  }

  set completed(value) {
    this._completed = value;
  }
}
