import { lists } from "./list.js";
import { sortTasksToDisplay } from "./sortTasksToBeDisplayed.js";
import { activeList } from "./viewControl.js";
import { displayList } from "./displayList.js";


export function deleteTask(event) {
  let rowId = event.target.parentElement.parentElement.dataset.listId;
  lists.deleteTask(rowId);
  sortTasksToDisplay(activeList);
  displayList();
}