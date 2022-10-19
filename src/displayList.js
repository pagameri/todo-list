// import * as DOMManager from './domManager.js';
import { DOMManager } from "./domManager.js";
import { lists } from "./taskLists.js";
import { stylePriority } from "./stylePriority.js";
import Delete from './img/trash.svg';
import Edit from './img/edit.svg';
import { attachRowListener } from "./index.js";
import Alert from "./img/alarm1.svg";
import Repeat from "./img/refresh-cw.svg";
import { createTaskCard, createTaskInfo, fillTaskInfo, createTaskControl,  fillTaskControl, createDescription } from "./createElement.js";



export function displayList() {
  let dataCount = 0;
  DOMManager.mainContent.innerHTML = '';
  
  if (lists.tasksToDisplay.length > 1) {
    sortListByDate(lists.tasksToDisplay);
  }
  
  lists.tasksToDisplay.forEach((task) => {
    createTaskCard();
    createTaskInfo();
    fillTaskInfo(task);
    createTaskControl();
    fillTaskControl(task);
    createDescription();
  });
  displayTaskCount();
  DOMManager.taskCards = document.querySelectorAll('.task-card');
  attachCardListener();
}


function sortListByDate(list) {
  list.sort((a, b) => {
    let x = new Date(a.fullDate).getTime();
    let y = new Date(b.fullDate).getTime();
    return x - y;
  });
}


function createRow(row, taskId) {
  row.dataset.listId = taskId;
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
    if (typeof value === 'object') {
      let cell = row.insertCell();
      if (value.time !== '') {
        let time = document.createTextNode(value.dueTime);
        cell.appendChild(time);
      }
      if (value.alert !== '') {
        let alert = document.createElement('img');
        alert.classList.add('alert');
        cell.appendChild(alert);
      }
      if (value.repeat !== '') {
        let repeat = document.createElement('img');
        repeat.classList.add('repeat');
        cell.appendChild(repeat);
      }
    }
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