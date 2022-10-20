import { lists } from './taskLists.js';


export function setCompleted(event) {
  lists.toggleCompleted(event.target.dataset.id);
  event.target.parentElement.parentElement.classList.toggle('checked'); // TODO: fix
}