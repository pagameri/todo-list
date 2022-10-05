import './styles.css';
import { toggleNewTaskModal, clearTaskModal, toggleTaskInfo } from './modalMngr.js';
import { addNewTaskToList, updateTaskList } from './list.js';
import { addNewProject, clearProjectInput, closeSideDetailsTab } from './projectControl.js'

export const DOMManager = (() => {
  const dueGroupSideBar = document.querySelector('.due-groups');
  const projectSideBar = document.querySelector('.projects');
  const sidebarDetails = document.querySelector('.side-details');
  const modalOverlay = document.querySelector('.modal-overlay');
  const newTaskBtn = document.querySelector('#add-new-task');
  const newTaskModal = document.querySelector('#new-task-modal');
  const selectProject = document.querySelector('#project');
  const closeNewTaskModal = document.querySelector('#close-new-task');
  const submitNewTask = document.querySelector('#submit-new-task');
  const submitNewProject = document.querySelector('#submit-new-project');
  const tableBody = document.querySelectorAll('tbody');
  const tableBodyToday = document.querySelector('#table-today');
  const tableBodyTomorrow = document.querySelector('#table-tomorrow');
  const tableBodyUpcoming= document.querySelector('#table-upcoming');
  let expendableRows = document.querySelectorAll('.expendable');

  return {
    dueGroupSideBar,
    projectSideBar,
    sidebarDetails,
    newTaskBtn,
    newTaskModal,
    selectProject,
    modalOverlay,
    closeNewTaskModal,
    submitNewTask,
    submitNewProject,
    tableBody,
    tableBodyToday,
    tableBodyTomorrow,
    tableBodyUpcoming,
    expendableRows,
    }
})();


DOMManager.newTaskBtn.addEventListener('click', () => {
  toggleNewTaskModal();
});

DOMManager.closeNewTaskModal.addEventListener('click', () => {
  toggleNewTaskModal();
});

DOMManager.submitNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  toggleNewTaskModal();
  addNewTaskToList();
  updateTaskList();
  clearTaskModal();
  DOMManager.expendableRows = document.querySelectorAll('.expendable');
  attachRowListener();
})

DOMManager.submitNewProject.addEventListener('click', (event) => {
  event.preventDefault();
  addNewProject();
  clearProjectInput();
  closeSideDetailsTab();
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!DOMManager.newTaskModal.classList.contains('closed')) {
      toggleNewTaskModal();
    } else if (!DOMManager.newProjectModal.classList.contains('closed')) {
      toggleNewProjectModal();
    }
  }
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