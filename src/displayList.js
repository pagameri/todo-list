import { DOMManager } from "./domManager.js";
import { lists } from "./list.js";

 
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
    addHiddenDescription(task);
    dataCount++;
  });
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
