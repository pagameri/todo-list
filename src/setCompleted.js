import { lists } from './taskLists.js';

export function setCompleted(event) {
  let taskId = event.target.parentElement.parentElement.dataset.listId;
  lists.toggleCompleted(taskId);
  event.target.parentElement.parentElement.classList.toggle('checked');
}