import { DOMManager } from './index.js';
import { addProjectToTaskModal } from './inputControl.js';
import { projects } from './projects.js';
import _ from 'lodash';


export function createNewProject() {
  let newProjectName = DOMManager.inputProjectName.value;
  newProjectName = newProjectName.toLowerCase();
  projects.addNewProject(newProjectName);
  updateProjectSideBar();
  addProjectToTaskModal(newProjectName);
}


export function updateProjectSideBar() {
  DOMManager.projectSideBar.innerHTML = '';
  projects.allProjects.forEach((project) => {
    const li = document.createElement('li');
    li.textContent = _.upperFirst(project.projectName);
    li.setAttribute('id', project.projectName);
    li.classList.add('list-selectors');
    DOMManager.projectSideBar.appendChild(li);
  });
}


export function clearProjectLists() {
  for (let projectElement of projects) {
    projectElement.elements = [];
  }
}
