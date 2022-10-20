// import * as DOMManager from './domManager.js';
import { DOMManager } from "../domManager.js";
import { lists } from "../task/taskLists.js";
import { attachCardListener } from "../index.js";
import { createTaskCard } from "./createElement.js";
import { displayTaskCount } from "./counter.js";



export function displayList() {
  DOMManager.mainContent.innerHTML = '';
  
  if (lists.tasksToDisplay.length > 1) {
    _sortListByDate(lists.tasksToDisplay);
  }
  
  lists.tasksToDisplay.forEach((task) => {
    createTaskCard(task);
  });
  displayTaskCount();
  DOMManager.taskCards = document.querySelectorAll('.task-card');
  DOMManager.descriptionContainers = document.querySelectorAll('description-container');
  attachCardListener();
}


function _sortListByDate(list) {
  list.sort((a, b) => {
    let x = new Date(a.fullDate).getTime();
    let y = new Date(b.fullDate).getTime();
    return x - y;
  });
}
