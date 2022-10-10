import { DOMManager } from './domManager.js';
import _ from 'lodash';

function toggleModal(modal) {
  modal.classList.toggle('closed');
  DOMManager.modalOverlay.classList.toggle('closed');
}


export function toggleNewTaskModal() {
  toggleModal(DOMManager.newTaskModal);
}


export function clearTaskModal() {
  document.forms['new-task-form'].reset();
}


export function toggleTaskInfo(row) {
  row.classList.toggle('hidden-row');
}

// TODO: remove project

// function updateProjectsAtTaskModal() {
//   DOMManager.selectProject.innerHTML = '';
//   projects.allProjects.forEach((project) => {
//     addProjectToTaskModal(project.projectName);
//   });
// }

export function addProjectToTaskModal(project) {
  const option = document.createElement('option');
  let textToDisplay = _.upperFirst(project);
  option.textContent = textToDisplay;
  option.setAttribute('value', textToDisplay);
  DOMManager.selectProject.appendChild(option);
}

export function clearProjectInput() {
  document.forms['new-project-form'].reset();
}

export function closeSideDetailsTab() {
  DOMManager.sidebarDetails.removeAttribute('open');
}