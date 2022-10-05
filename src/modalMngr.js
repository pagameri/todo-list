import { DOMManager } from "./index.js";
import { projectValues } from "./projectControl.js"

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

export function updateProjectsAtTaskModal() {
  DOMManager.selectProject.innerHTML = '';
  projectValues.forEach((value) => {
    const option = document.createElement('option');
    let textToDisplay = value.charAt(0).toUpperCase() + value.slice(1);
    option.textContent = textToDisplay;
    option.setAttribute('value', textToDisplay);
    DOMManager.selectProject.appendChild(option);
  });
  
}
