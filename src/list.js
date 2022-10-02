import { DOMManager } from "./index.js"; 
import { formatISO, getHours, getMinutes } from "date-fns";
import { enGB } from 'date-fns/locale';
const locales = {enGB};


const formDOMManager = (() => {
  const title = document.querySelector('#title');
  // const color = document.querySelector('#color');
  const dueDate = document.querySelector('#due-date');
  const dueTime = document.querySelector('#due-time');
  const alert = document.querySelector('#alert');
  const repeat = document.querySelector('#repeat');
  const ends = document.querySelector('#ends');
  const endDate = document.querySelector('#end-date');
  const priority = document.querySelector('#priority');
  const project = document.querySelector('#project');
  const description = document.querySelector('#description');

  return {
    title,
    /*color,*/
    dueDate,
    dueTime,
    alert,
    repeat,
    ends,
    endDate,
    priority,
    project,
    description
  }
})();

let dataCount = 0;
const list = [];

const TodoMaker = (title, /*color,*/ due, alert, repeat, ends, endDate, priority, project, description) => {
  title: title;
  // color: color;
  due: due;
  alert: alert;
  repeat: repeat;
  ends: ends;
  endDate: endDate;
  priority: priority;
  project: project;
  description: description;

  return {title, due, alert, repeat, ends, endDate, priority, project, description}
}


function dueDateTime() {
  const dateFromPicker = formDOMManager.dueDate.value;
  const timeFromPicker = formDOMManager.dueTime.value;
  let dateParts, timeParts;
  if (dateFromPicker === '') {
    return 'no-date'
  } else {
    dateParts = dateFromPicker.split('-');
  }
  if (timeFromPicker === '') {
    timeParts = ['09', '00'];
  } else {
    timeParts = timeFromPicker.split(':');
  }
  return formatISO(new Date(dateParts[0], dateParts[1]-1, dateParts[2], timeParts[0], timeParts[1]));
}


function sortListByDate() {
  list.sort((a, b) => {
    let x = new Date(a.due).getTime();
    let y = new Date(b.due).getTime();
    return x - y;
  });
}


function addTask(element) {
  let row = DOMManager.tableBody.insertRow();
  row.dataset.listId = dataCount;
  row.classList.add('expendable');
  let cell = row.insertCell();
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  cell.appendChild(checkbox);

  let rowValues = [
    element.title,
    getTime(element.due),
    element.repeat,
    element.priority,
    element.project,
  ]
  rowValues.forEach((value) => {
    let cell = row.insertCell();
    let text = document.createTextNode(value);
    cell.appendChild(text);
  });
}


function getTime(dueDate) {
  let date = new Date(dueDate);
  let time = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  return time;
}


function addHiddenDescription(element) {
  let hiddenRow = DOMManager.tableBody.insertRow();
  hiddenRow.classList.add('hidden-row');
  hiddenRow.insertCell();
  let hiddenCell = hiddenRow.insertCell();
  hiddenCell.setAttribute('colspan', 5);
  let hiddenText = document.createTextNode(element.description);
  hiddenCell.appendChild(hiddenText);
}



export function addNewTaskToList() {
  let task = TodoMaker(
    formDOMManager.title.value,
    /*formDOMManager.color,*/
    dueDateTime(),
    formDOMManager.alert.value,
    formDOMManager.repeat.value, 
    formDOMManager.ends.value, 
    formDOMManager.endDate.value, 
    formDOMManager.priority.value,
    formDOMManager.project.value,
    formDOMManager.description.value
  );
  list.push(task)
}


export function populateTaskList() {
  DOMManager.tableBody.innerHTML = '';
  dataCount = 0;
  if (list.length > 1) {
    sortListByDate();
    console.table(list);
  }
  for (let element of list) {
    // add if: today's task
    addTask(element);
    addHiddenDescription(element);
    // addChecklist()
  }
}


export function clearTaskModal() {
  document.forms['new-task-form'].reset();
}


export function toggleTaskInfo(row) {
  row.classList.toggle('hidden-row');
}