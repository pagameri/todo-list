import { DOMManager } from "./index.js";

function toggleModal(modal) {
  modal.classList.toggle('closed');
  DOMManager.modalOverlay.classList.toggle('closed');
}


export function toggleNewTaskModal() {
  toggleModal(DOMManager.newTaskModal);
}

export function toggleNewProjectModal() {
  toggleModal(DOMManager.newProjectModal);
}