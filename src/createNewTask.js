import { DOMManager } from './domManager.js';
import { Task, lists } from "./list.js";

let taskId = 0;

export function createNewTask() {
  let task = new Task(
    taskId,
    DOMManager.title.value,
    DOMManager.dueDate.value,
    DOMManager.dueTime.value,
    DOMManager.alert.value,
    DOMManager.repeat.value, 
    DOMManager.ends.value, 
    DOMManager.endDate.value, 
    DOMManager.priority.value,
    DOMManager.project.value,
    DOMManager.description.value,
    false,
  );
  lists.addToAllTasks(task);

  taskId++;
}
 
