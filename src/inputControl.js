// import * as DOMManager from './domManager.js';
import { DOMManager } from "./domManager.js";
import _ from 'lodash';
import { projects } from "./projectList.js";


export function toggleModal(modal) {
  modal.classList.toggle('closed');
  DOMManager.modalOverlay.classList.toggle('closed');
}

// export function toggleNewTaskModal() {
//   _toggleModal(DOMManager.newTaskModal);
// }

// export function toggleEditTaskModal() {
//   _toggleModal(DOMManager.editTaskModal);
// }


// export function clearNewTaskModal() {
//   DOMManager.newTaskModalForm.reset();
//   // document.forms['new-task-form'].reset();
// }

// export function clearEditTaskModal() {
//   DOMManager.editTaskModalForm.reset();
//   // document.forms['edit-task-form'].reset();
// }

export function clearForm(form) {
  form.reset();
}


/////////////////////////////

export function toggleTaskInfo(row) {
  row.classList.toggle('hidden-row');
}


export function updateTaskModalProjectValues(projectSelect) {
  _clearModalProjectValues(projectSelect);
  _populateModalProjectValues(projectSelect);


}


// export function clearProjectInput() {
//   document.forms['new-project-form'].reset();
// }


export function closeDetails(details) {
  details.removeAttribute('open');
}


function _clearModalProjectValues(select) {
  select.innerHTML = '';
}

function _populateModalProjectValues(select) {
  projects.allProjects.forEach((project) => {
    _addProjectOption(select, project);
  })

}

function _addProjectOption(select, project) {
  const option = document.createElement('option');
  // let textToDisplay = _.upperFirst(project.projectName);
  // option.textContent = textToDisplay;
  option.textContent = _.upperFirst(project.projectName);
  option.setAttribute('value', project.projectName);
  select.appendChild(option);
}