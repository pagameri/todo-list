import './styles.css';
import { toggleNewTaskModal, clearTaskModal, toggleTaskInfo, clearProjectInput ,closeSideDetailsTab } from './inputControl.js';
import { createNewTask } from './createNewTask.js';
import { createNewProject } from './projectControl.js'
import { showSelectedList } from './showSetList.js';
import { startUp } from './startUpDefault.js';

export const DOMManager = (() => {
  const dueGroupSideBar = document.querySelector('.due-groups');
  const projectSideBar = document.querySelector('.projects');
  const sidebarDetails = document.querySelector('.side-details');
  const modalOverlay = document.querySelector('.modal-overlay');
  const newTaskBtn = document.querySelector('#add-new-task');
  const newTaskModal = document.querySelector('#new-task-modal');
  const selectProject = document.querySelector('#project');
  const inputProjectName = document.querySelector('#project-name');
  const closeNewTaskModal = document.querySelector('#close-new-task');
  const submitNewTask = document.querySelector('#submit-new-task');
  const submitNewProject = document.querySelector('#submit-new-project');
  const tableBody = document.querySelector('tbody');
  let expendableRows = document.querySelectorAll('.expendable');

  // form input
  const title = document.querySelector('#title');
  const dueDate = document.querySelector('#due-date');
  const dueTime = document.querySelector('#due-time');
  const alert = document.querySelector('#alert');
  const repeat = document.querySelector('#repeat');
  const ends = document.querySelector('#ends');
  const endDate = document.querySelector('#end-date');
  const priority = document.querySelector('#priority');
  const project = document.querySelector('#project');
  const description = document.querySelector('#description');

  // sidebar selectors
  const listSelectors = document.querySelectorAll('.list-selectors');
  const today = document.getElementById('today');
  const nextWeek = document.getElementById('next-week');
  const noDueDate = document.getElementById('no-date');
  const allUncompleted = document.getElementById('uncompleted');
  const completed = document.getElementById('completed');

  return {
    dueGroupSideBar, projectSideBar, sidebarDetails, newTaskBtn,
    newTaskModal, selectProject, inputProjectName, modalOverlay, closeNewTaskModal,
    submitNewTask, submitNewProject, tableBody, expendableRows,
    // form
    title, dueDate, dueTime, alert, repeat,
    ends, endDate, priority, project, description,
    // sidebar selectors
    listSelectors, today, nextWeek, noDueDate, allUncompleted, completed,
  }
})();


startUp();


DOMManager.newTaskBtn.addEventListener('click', () => {
  toggleNewTaskModal();
});


DOMManager.closeNewTaskModal.addEventListener('click', () => {
  toggleNewTaskModal();
});


DOMManager.submitNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  createNewTask();
  clearTaskModal();
  toggleNewTaskModal();
});


DOMManager.submitNewProject.addEventListener('click', (e) => {
  e.preventDefault();
  createNewProject();
  clearProjectInput();
  closeSideDetailsTab();
  DOMManager.listSelectors = document.querySelectorAll('.list-selectors');
  attachListSelectorListener();
});


window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!DOMManager.newTaskModal.classList.contains('closed')) {
      toggleNewTaskModal();
    } else if (!DOMManager.newProjectModal.classList.contains('closed')) {
      toggleNewProjectModal();
    }
  }
});


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
    });
  })
};


export function attachListSelectorListener() {
  DOMManager.listSelectors.forEach((selector) => {
    selector.addEventListener('click', (e) => {
      showSelectedList(e.target.id);
      DOMManager.expendableRows = document.querySelectorAll('.expendable');
      attachRowListener();
    });
  });
}


DOMManager.listSelectors.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    showSelectedList(e.target.id);
    DOMManager.expendableRows = document.querySelectorAll('.expendable');
    attachRowListener();
  });
});

