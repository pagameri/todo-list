import { DOMManager } from "./domManager.js";
import { lists } from "./list.js";
import { toggleNewTaskModal } from "./inputControl.js";
import _ from "lodash";
import { changeModalBtns } from "./inputControl.js";
import { createNewTask } from "./createNewTask.js";
import { removeTaskIdIteration } from "./createNewTask.js";


let taskIndexToEdit;


export function editTask(event) {
  toggleNewTaskModal();
  console.log(DOMManager.modalForm);
  let rowId = event.target.parentElement.parentElement.previousElementSibling.dataset.listId;
  let id = lists.tasksToDisplay[rowId].id;
  let taskIndex = _.findIndex(lists.allTasks, {'id': id});
  taskIndexToEdit = taskIndex;
  populateModal(taskIndex);
  changeModalBtns();
}


function  populateModal(index) {
  let task = lists.allTasks[index];
  DOMManager.title.value = task.title;
  DOMManager.dueDate.value = task.dueDate;
  DOMManager.dueTime.value = task.dueTime;
  DOMManager.alert.value = task.alert;
  DOMManager.repeat.value = task.repeat;
  DOMManager.ends.value = task.ends;
  DOMManager.endDate.value = task.endDate;
  DOMManager.priority.value = task.priority;
  DOMManager.project.value = task.project;
  DOMManager.description.value = task.description;
}


export function updateTaskValues() {
  createNewTask();
  lists.allTasks.splice(taskIndexToEdit, 1);
  lists.allTasks[lists.allTasks.length - 1].id = taskIndexToEdit;
  console.log(lists.allTasks)
  removeTaskIdIteration();
}