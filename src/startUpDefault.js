import { projects, projectValues } from "./projects";
import { updateProjectSideBar } from "./projectControl";
import { DOMManager, attachListSelectorListener } from "./index.js";

export function startUp() {
  projectValues.forEach((value) => {
    projects.addNewProject(value);
  });
  updateProjectSideBar();
  DOMManager.listSelectors = document.querySelectorAll('.list-selectors');
  attachListSelectorListener();
}
