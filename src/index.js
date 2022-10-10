import './styles.css';
import { DOMManager } from './domManager.js';
import { toggleNewTaskModal, clearTaskModal, toggleTaskInfo, clearProjectInput ,closeSideDetailsTab } from './inputControl.js';
import { createNewTask } from './createNewTask.js';
import { createNewProject } from './projectControl.js'
import { showSelectedList } from './showSetList.js';
import { startUp } from './startUpDefault.js';
import { showActiveList } from './viewControl.js';
import { markCompleted } from './markCompleted.js';


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
  showActiveList();
  DOMManager.expendableRows = document.querySelectorAll('.expendable');
  attachRowListener();
  DOMManager.checkboxes = document.querySelectorAll('input[type="checkbox"]');
  attachCheckboxListener();
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

// DOMManager.listSelectors.forEach((selector) => {
//   selector.addEventListener('click', (e) => {
//     showActiveList(e.target.id);
//     DOMManager.expendableRows = document.querySelectorAll('.expendable');
//     attachRowListener();
//     DOMManager.checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     attachCheckboxListener();
//   });
// });


// DOMManager.checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('click', (e) => {
//     checkbox.parentElement.parentElement.classList.toggle('checked');
//   });
// });

export function attachRowListener() {
  DOMManager.expendableRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target.tagName === 'TH') {
        console.log('its th'); // TODO: sort
      } else if (e.target.tagName === 'INPUT') {
        let rowID = e.target.parentElement.parentElement.dataset.listId;
        markCompleted(rowID);
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
      showActiveList(e.target.id);
      DOMManager.expendableRows = document.querySelectorAll('.expendable');
      attachRowListener();
      DOMManager.checkboxes = document.querySelectorAll('input[type="checkbox"]');
      attachCheckboxListener();
      DOMManager.checkboxes.forEach((checkbox) => {
        if (checkbox.checked === true) {
          checkbox.parentElement.parentElement.classList.toggle('checked');
        }
      });
    });
  });
}

export function attachCheckboxListener() {
  DOMManager.checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        checkbox.parentElement.parentElement.classList.toggle('checked');
    });
  });
}