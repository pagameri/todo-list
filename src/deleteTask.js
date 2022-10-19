import { lists } from "./taskLists.js";
import { sortTasksToDisplay } from "./sortTasksToBeDisplayed.js";
import { activeList } from "./viewControl.js";
import { displayList } from "./displayList.js";


export function deleteTask(event) {
  let taskId = event.target.parentElement.parentElement.dataset.listId;
  lists.deleteTask(taskId);
  sortTasksToDisplay(activeList);
  displayList();
}