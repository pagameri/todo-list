import { DOMManager } from "./index.js"; 
import { format } from "date-fns/locale";
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
})()

const TodoMaker = (title, /*color,*/ dueDate, dueTime, alert, repeat, ends, endDate, priority, project, description) => {
  title: title;
  // color: color;
  dueDate: dueDate;
  dueTime: dueTime;
  alert: alert;
  repeat: repeat;
  ends: ends;
  endDate: endDate;
  priority: priority;
  project: project;
  description: description;

  return {title, dueDate, dueTime, alert, repeat, ends, endDate, priority, project, description}
}

const list = [

];

export function addNewTaskToList() {
  let task = TodoMaker(
    formDOMManager.title.value,
    /*formDOMManager.color,*/
    formDOMManager.dueDate.value,
    formDOMManager.dueTime.value,
    formDOMManager.alert.value,
    formDOMManager.repeat.value, 
    formDOMManager.ends.value, 
    formDOMManager.endDate.value, 
    formDOMManager.priority.value,
    formDOMManager.project.value,
    formDOMManager.description.value);

  list.push(task)
}

let dataCount = 0;

export function populateTaskList() {
  DOMManager.tableBody.innerHTML = '';
  dataCount = 0;
  if (list.length > 1) {
    sortList();
  }
  for (let element of list) {
    // if (element.dueDate === )
    addTask(element);
    addHiddenDescription(element);
    // addChecklist()
  }


}

function sortList() {
  list.sort((a, b) => a.dueDate - b.dueDate);
  console.log(list);
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
    element.dueTime,
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

function addHiddenDescription(element) {
  let hiddenRow = DOMManager.tableBody.insertRow();
  hiddenRow.classList.add('hidden-row');
  hiddenRow.insertCell();
  let hiddenCell = hiddenRow.insertCell();
  hiddenCell.setAttribute('colspan', 5);
  let hiddenText = document.createTextNode(element.description);
  hiddenCell.appendChild(hiddenText);
}

export function clearTaskModal() {
  formDOMManager.title.value = '',
    /*formDOMManager.color = '',*/
    formDOMManager.dueDate.value = '',
    formDOMManager.dueTime.value = '',
    formDOMManager.alert.value = '',
    formDOMManager.repeat.value = '', 
    formDOMManager.ends.value = '', 
    formDOMManager.endDate.value = '', 
    formDOMManager.priority.value = '',
    formDOMManager.project.value = '',
    formDOMManager.description.value = ''
}

export function toggleTaskInfo(row) {
  row.classList.toggle('hidden-row');
}