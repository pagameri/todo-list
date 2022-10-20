// import * as DOMManager from './domManager.js';
import { DOMManager } from "../domManager.js";
import { projects } from "../projects/projectList.js";
import _ from 'lodash';


export function toggleModal(modal) {
  modal.classList.toggle('closed');
  DOMManager.modalOverlay.classList.toggle('closed');
}


export function clearForm(form) {
  form.reset();
}


export function toggleTaskInfo(row) {
  row.classList.toggle('hidden-row');
}


export function updateTaskModalProjectValues(projectSelect) {
  _clearModalProjectValues(projectSelect);
  _populateModalProjectValues(projectSelect);
}


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
  option.textContent = _.upperFirst(project.projectName);
  option.setAttribute('value', project.projectName);
  select.appendChild(option);
}