import { lists } from "./taskLists.js";
import { sortTasksToDisplay } from "../display/sortTasksToBeDisplayed.js";
import { activeList } from "../display/viewControl.js";
import { displayList } from "../display/displayList.js";
import { displayProjectCount, displayTaskCount } from "../display/counter.js";


export function deleteTask(event) {
  let taskId = event.target.parentElement.parentElement.dataset.listId;
  lists.deleteTask(taskId);
  sortTasksToDisplay(activeList);
  displayList();
  displayTaskCount();
  displayProjectCount();
}