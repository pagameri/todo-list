import { DOMManager } from './domManager.js';
import _ from 'lodash';

function toggleModal(modal) {
  modal.classList.toggle('closed');
  DOMManager.modalOverlay.classList.toggle('closed');
}


export function toggleNewTaskModal() {
  toggleModal(DOMManager.newTaskModal);
  DOMManager.submitNewTask.style.display = 'block';
  DOMManager.submitChangesBtn.style.display = 'none';
}


export function clearTaskModal() {
  document.forms['new-task-form'].reset();
}


export function toggleTaskInfo(row) {
  row.classList.toggle('hidden-row');
}


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


export function changeModalBtns() {
  DOMManager.submitNewTask.style.display = 'none';
  DOMManager.submitChangesBtn.style.display = 'block';
}