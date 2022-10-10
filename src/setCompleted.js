import { lists } from './list.js';

export function setCompleted(event) {
  let rowId = event.target.parentElement.parentElement.dataset.listId;
  lists.toggleCompleted(rowId);
  event.target.parentElement.parentElement.classList.toggle('checked');
}