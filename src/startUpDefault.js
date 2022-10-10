import { DOMManager } from './domManager.js';
import { updateProjectSideBar } from "./viewControl.js";
import { attachListSelectorListener, attachRowListener } from "./index.js";
import { activateSelector } from './viewControl.js';
import { displayList } from './displayList.js';
import { sortTasksToDisplay } from './sortTasksToBeDisplayed.js';


export function startUp() {
  updateProjectSideBar();
  DOMManager.listSelectors = document.querySelectorAll('.list-selectors');
  attachListSelectorListener();
  activateSelector('today');
  sortTasksToDisplay('today');
  displayList();
  attachRowListener();
}
