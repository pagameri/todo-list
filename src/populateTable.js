import { DOMManager } from './domManager.js';


export function createRow(row, dataCount, className) {
  row.dataset.listId = dataCount;
  row.classList.add(className);
  dataCount++;
}


export function addCheckbox(row, completed) {
  let cell = row.insertCell();
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  cell.appendChild(checkbox);
  if (completed === true) {
    checkbox.checked = true;
    checkbox.classList.toggle('checked');
  } 
}


export function fillRow(row, values) {
  values.forEach((value) => {
    let cell = row.insertCell();
    let text = document.createTextNode(value);
    cell.appendChild(text);
  });
  if (values.completed) {
    
  }
}


export function addHiddenDescription(element) {
  let hiddenRow = DOMManager.tableBody.insertRow();
  hiddenRow.classList.add('hidden-row');
  hiddenRow.insertCell();
  let hiddenCell = hiddenRow.insertCell();
  hiddenCell.setAttribute('colspan', 5);
  let hiddenText = document.createTextNode(element.description);
  hiddenCell.appendChild(hiddenText);
}



