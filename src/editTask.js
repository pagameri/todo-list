// import * as DOMManager from './domManager.js';
import { DOMManager } from "./domManager.js";
import { lists } from "./taskLists.js";
import _ from "lodash";


export let taskIndex;




export function editTask(id) {
  const title = DOMManager.titleEdit.value;
  const dueDate = DOMManager.dueDateEdit.value;
  const priority = DOMManager.priorityEdit.value;
  const project = DOMManager.projectEdit.value;
  const description = DOMManager.descriptionEdit.value;
  
  lists.editTitle(id, title);
  lists.editDueDate(id, dueDate);
  lists.editPriority(id, priority);
  lists.editProject(id, project);
  lists.editDescription(id, description);
}



export function populateModal(index) {
  DOMManager.titleEdit.value = lists.allTasks[index].title;
  DOMManager.dueDateEdit.value = lists.allTasks[index].dueDate;
  DOMManager.priorityEdit.value = lists.allTasks[index].priority;
  DOMManager.projectEdit.value = lists.allTasks[index].project;
  DOMManager.descriptionEdit.value = lists.allTasks[index].description;
}


export function setTaskToBeEdited(index) {
  taskIndex = index;
}