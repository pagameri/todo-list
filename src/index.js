import './styles.css';
import { toggleNewTaskModal, toggleNewProjectModal } from './modalMngr.js';
import { addNewTaskToList, populateTaskList, clearTaskModal, toggleTaskInfo } from './list.js';

export const DOMManager = (() => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const newTaskBtn = document.querySelector('#add-new-task');
  const newTaskModal = document.querySelector('#new-task-modal');
  const closeNewTaskModal = document.querySelector('#close-new-task');
  const newProjectBtn = document.querySelector('#add-new-project');
  const newProjectModal = document.querySelector('#new-project-modal');
  const closeNewProjectModal = document.querySelector('#close-new-project');
  const submitNewTask = document.querySelector('#submit-new-task');
  const tableBody = document.querySelector('tbody');
  let expendableRows = document.querySelectorAll('.expendable');

  return {
    newTaskBtn,
    newTaskModal,
    modalOverlay,
    closeNewTaskModal,
    newProjectBtn,
    newProjectModal,
    closeNewProjectModal,
    submitNewTask,
    tableBody,
    expendableRows,
    }
})();

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

DOMManager.submitNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  toggleNewTaskModal();
  addNewTaskToList();
  populateTaskList();
  clearTaskModal();
  DOMManager.expendableRows = document.querySelectorAll('.expendable');
  attachRowListener();
})

function attachRowListener() {
  DOMManager.expendableRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target.tagName === 'TH') {
        console.log('its th'); // TODO: sort
      } else {
        let hiddenRow = e.target.parentElement.nextElementSibling;
        toggleTaskInfo(hiddenRow);
      }
    })
  })
}