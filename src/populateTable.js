import { DOMManager } from './index.js';


export function createRow(row, dataCount, className) {
  row.dataset.listId = dataCount;
  row.classList.add(className);
  dataCount++;
}


export function addCheckbox(row) {
  let cell = row.insertCell();
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  cell.appendChild(checkbox);
}


export function fillRow(row, values) {
  values.forEach((value) => {
    let cell = row.insertCell();
    let text = document.createTextNode(value);
    cell.appendChild(text);
  });
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



