import './styles.css';
import { DOMManager } from './domManager.js';
import { toggleNewTaskModal, clearTaskModal, toggleTaskInfo, clearProjectInput ,closeSideDetailsTab } from './inputControl.js';
import { createNewTask } from './createNewTask.js';
import { createNewProject } from './projects.js'
import { startUp } from './startUpDefault.js';
import { activeList, activateSelector } from './viewControl.js';
import { displayList } from './displayList.js';
import { sortTasksToDisplay } from './sortTasksToBeDisplayed.js';
import { setCompleted } from './setCompleted.js';
import { deleteTask } from './deleteTask.js';
import { editTask } from './editTask.js';
import { updateTaskValues } from './editTask.js'; 


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
});


DOMManager.submitChangesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  updateTaskValues();
  clearTaskModal();
  toggleNewTaskModal();
  sortTasksToDisplay(activeList);
  displayList();
})


DOMManager.submitNewProject.addEventListener('click', (e) => {
  e.preventDefault();
  createNewProject();
  clearProjectInput();
  closeSideDetailsTab();
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
        setCompleted(e);
        sortTasksToDisplay(activeList);
        displayList();
      } else if (e.target.tagName === 'IMG') {
          deleteTask(e);
      } else {
        let hiddenRow = e.target.parentElement.nextElementSibling;
        toggleTaskInfo(hiddenRow);
        DOMManager.editBtns = document.querySelectorAll('.edit-btn');
        attachEditListener();
      }
    });
  });
};


export function attachListSelectorListener() {
  DOMManager.listSelectors.forEach((selector) => {
    selector.addEventListener('click', (e) => {
      activateSelector(e.target.id);
      sortTasksToDisplay(e.target.id);
      displayList();
    });
  });
};


export function attachEditListener() {
  DOMManager.editBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      editTask(e);
    });
  });
}