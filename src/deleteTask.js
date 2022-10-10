import { DOMManager } from "./domManager.js";
import { lists } from "./list.js";
import { sortTasksToDisplay } from "./sortTasksToBeDisplayed.js";
import { activeList } from "./viewControl.js";
import { displayList } from "./displayList.js";
import { attachRowListener } from "./index.js";

export function deleteTask(event) {
  let rowId = event.target.parentElement.parentElement.dataset.listId;
  lists.deleteTask(rowId);
  sortTasksToDisplay(activeList);
  displayList();
  DOMManager.expendableRows = document.querySelectorAll('.expendable');
  attachRowListener();
}