import { DOMManager } from './index.js';
import { list } from './list.js';
import { updateProjectsAtTaskModal } from './modalMngr.js';

const projectFormDOMManager = (() => {
  const inputProjectName = document.querySelector('#project-name');

  return {
    inputProjectName,
  };
})();

const Project = (projectName, elements) => {
  projectName: projectName;
  elements: elements;

  return {projectName, elements};
}

let projects = [];

export let projectValues = ['general', 'family', 'chores', 'car', 'grocery'];
projectValues.forEach((value) => {
  let project = Project(value, []);
  projects.push(project);
});

function updateProjectSideBar() {
  DOMManager.projectSideBar.innerHTML = '';
  projectValues.forEach((value) => {
    const li = document.createElement('li');
    li.textContent = value.charAt(0).toUpperCase() + value.slice(1);
    DOMManager.projectSideBar.appendChild(li);
  });
}

export function updateTasksInProjects() {
  for (let projectElement of projects) {
    projectElement.elements = [];
  }
  for (let listElement of list) {
    let projectOfTask = listElement.project.toLowerCase();
    for (let projectElement of projects) {
      if (projectOfTask === projectElement.projectName) {
        projectElement.elements.push(listElement);
      }
    }
  }
}

export function addNewProject() {
  let newProject = projectFormDOMManager.inputProjectName.value;
  projectValues.push(newProject);
  updateProjectSideBar();
  updateProjectsAtTaskModal();
}


export function clearProjectInput() {
  document.forms['new-project-form'].reset();
}

export function closeSideDetailsTab() {
  DOMManager.sidebarDetails.removeAttribute('open');
}