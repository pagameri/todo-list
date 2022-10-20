// import * as DOMManager from './domManager.js';
import { DOMManager } from "../domManager.js";
import Task from '../class/task.js';
import { lists } from "./taskLists.js";


let taskId = 0;

export function addNewTaskToList() {
  const task = new Task(
    taskId,
    DOMManager.title.value,
    DOMManager.dueDate.value, 
    DOMManager.dueTime.value,
    DOMManager.priority.value,
    DOMManager.project.value,
    DOMManager.description.value,
  );
  lists.addToAllTasks(task);
}


export function iterateTaskId() {
  taskId++;
}
 

export function removeLastIteration() {
  taskId--;
}