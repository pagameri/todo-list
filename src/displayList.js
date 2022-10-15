import { DOMManager } from "./domManager.js";
import { lists } from "./list.js";
import { stylePriority } from "./stylePriority.js";
import Delete from './img/trash.svg';
import Edit from './img/edit.svg';
import { displayTaskCount } from "./counter.js";
import { attachRowListener } from "./index.js";
 

export function displayList() {
  let dataCount = 0;
  DOMManager.tableBody.innerHTML = '';
  
  if (lists.tasksToDisplay.length > 1) {
    sortListByDate(lists.tasksToDisplay);
  }
  
  lists.tasksToDisplay.forEach((task) => {
    let rowValues = [task.dueTime, task.title, task.project];
    let row = DOMManager.tableBody.insertRow();
    createRow(row, dataCount);
    addCheckbox(row, task);
    fillRow(row, rowValues);
    stylePriority(row, task);
    addHiddenDescription(task);
    dataCount++;
  });
  displayTaskCount();
  DOMManager.expendableRows = document.querySelectorAll('.expendable');
  attachRowListener();
}


function sortListByDate(list) {
  list.sort((a, b) => {
    let x = new Date(a.fullDate).getTime();
    let y = new Date(b.fullDate).getTime();
    return x - y;
  });
}


function createRow(row, dataCount) {
  row.dataset.listId = dataCount;
  row.classList.add('expendable');
}


function addCheckbox(row, task) {
  let cell = row.insertCell();
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  cell.appendChild(checkbox);
  if (task.completed === true) {
    checkbox.checked = true;
    checkbox.parentElement.parentElement.classList.toggle('checked');
  } 
}


function fillRow(row, values) {
  values.forEach((value) => {
    let cell = row.insertCell();
    let text = document.createTextNode(value);
    cell.appendChild(text);
  });
  addIcon(row, Delete, 'delete-btn');
}


function addHiddenDescription(element) {
  let hiddenRow = DOMManager.tableBody.insertRow();
  hiddenRow.classList.add('hidden-row');
  hiddenRow.insertCell();
  hiddenRow.insertCell();
  let hiddenCell = hiddenRow.insertCell();
  hiddenCell.setAttribute('colspan', 2);
  let hiddenText = document.createTextNode(element.description);
  hiddenCell.appendChild(hiddenText);
  addIcon(hiddenRow, Edit, 'edit-btn');
}


function addIcon(row, Icon, className) {
  let cell = row.insertCell();
  const icon = new Image;
  icon.src = Icon;
  icon.classList.add(className);
  cell.appendChild(icon);
}