import { updateProjectSideBar, activateSelector } from "./viewControl.js";
import { displayList } from './displayList.js';
import { sortTasksToDisplay } from './sortTasksToBeDisplayed.js';
import { displayTaskCount } from "./counter.js";


export function startUp() {
  displayTaskCount();
  updateProjectSideBar();
  activateSelector('today');
  sortTasksToDisplay('today');
  displayList();
}
