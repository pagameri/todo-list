import { DOMManager } from './domManager.js';
import { projects, projectValues } from "./projects";
import { updateProjectSideBar } from "./projectControl";
import { attachListSelectorListener, attachRowListener, attachCheckboxListener } from "./index.js";
import { showSelectedList } from "./showSetList";

export function startUp() {
  projectValues.forEach((value) => {
    projects.addNewProject(value);
  });
  updateProjectSideBar();
  DOMManager.listSelectors = document.querySelectorAll('.list-selectors');
  attachListSelectorListener();
  showSelectedList('today');
  attachRowListener();
  attachCheckboxListener();
}
