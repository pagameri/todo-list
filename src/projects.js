import { DOMManager } from './domManager.js';
import { updateProjectSideBar } from './viewControl.js';
import { addProjectToTaskModal } from './inputControl.js';

export class Project {
  constructor(projectName, elements) {
    this.projectName = projectName;
    this.elements = elements;
  }
}

export let projectGroups = ['general', 'family', 'chores', 'car', 'grocery'];

export function createNewProject() {
  let newProjectName = DOMManager.inputProjectName.value;
  newProjectName = newProjectName.toLowerCase();
  projectGroups.push(newProjectName);
  updateProjectSideBar();
  addProjectToTaskModal(newProjectName);
}

