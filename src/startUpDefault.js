import { updateProjectSideBar } from "./viewControl.js";
import { activateSelector } from './viewControl.js';
import { displayList } from './displayList.js';
import { sortTasksToDisplay } from './sortTasksToBeDisplayed.js';


export function startUp() {
  updateProjectSideBar();
  activateSelector('today');
  sortTasksToDisplay('today');
  displayList();
}
