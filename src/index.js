import './styles.css';
import { toggleNewTaskModal, toggleNewProjectModal } from './modalMngr.js';

export const DOMManager = (() => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const newTaskBtn = document.querySelector('#add-new-task');
  const newTaskModal = document.querySelector('#new-task-modal');
  const closeNewTaskModal = document.querySelector('#close-new-task');
  const newProjectBtn = document.querySelector('#add-new-project');
  const newProjectModal = document.querySelector('#new-project-modal');
  const closeNewProjectModal = document.querySelector('#close-new-project');
  return {
    newTaskBtn,
    newTaskModal,
    modalOverlay,
    closeNewTaskModal,
    newProjectBtn,
    newProjectModal,
    closeNewProjectModal,
    }
})()

DOMManager.newTaskBtn.addEventListener('click', () => {
  toggleNewTaskModal();
});

DOMManager.closeNewTaskModal.addEventListener('click', () => {
  toggleNewTaskModal();
});

DOMManager.newProjectBtn.addEventListener('click', () => {
  toggleNewProjectModal();
});

DOMManager.closeNewProjectModal.addEventListener('click', () => {
  toggleNewProjectModal();
});