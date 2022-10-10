import './styles.css';
import { DOMManager } from './domManager.js';
import { toggleNewTaskModal, clearTaskModal, toggleTaskInfo, clearProjectInput ,closeSideDetailsTab } from './inputControl.js';
import { createNewTask } from './createNewTask.js';
import { createNewProject } from './projects.js'
import { startUp } from './startUpDefault.js';
import { lists } from './list.js';
import { activeList, activateSelector, updateProjectSideBar } from './viewControl.js';
import { displayList } from './displayList.js';
import { sortTasksToDisplay } from './sortTasksToBeDisplayed.js';


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
  activateSelector(activeList);
  sortTasksToDisplay(activeList);
  displayList();
  DOMManager.expendableRows = document.querySelectorAll('.expendable');
  attachRowListener();
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


export function attachRowListener() {
  DOMManager.expendableRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target.tagName === 'TH') {
        console.log('its th'); // TODO: sort
      } else if (e.target.tagName === 'INPUT') {
        let rowId = e.target.parentElement.parentElement.dataset.listId;
        lists.toggleCompleted(rowId);
        e.target.parentElement.parentElement.classList.toggle('checked');
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
      activateSelector(e.target.id);
      sortTasksToDisplay(e.target.id);
      displayList();
      DOMManager.expendableRows = document.querySelectorAll('.expendable');
      attachRowListener();
    });
  });
};
