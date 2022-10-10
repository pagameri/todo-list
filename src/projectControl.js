import { DOMManager } from './domManager.js';
import { addProjectToTaskModal } from './inputControl.js';
import { projects } from './projects.js';
import { lists } from './list.js';
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
  projects.allProjects.forEach((project) => {
    project.elements = [];
  });
}


export function updateProjects() {
  clearProjectLists();
  lists.allTasks.forEach((task) => {
    addTaskToProjects(task);
  })
}