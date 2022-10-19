import './styles.css';
// import * as DOMManager from './domManager.js';
import { DOMManager } from "./domManager.js";
import { toggleModal, toggleTaskInfo, closeDetails, clearForm, updateTaskModalProjectValues } from './inputControl.js';
import { addNewTaskToList, iterateTaskId } from './newTask.js';
import { createNewProject } from './class/project.js'
import { startUp } from './startUpDefault.js';
import { activeList, activateSelector, setActiveList, updateProjectSideBar } from './viewControl.js';
import { displayList } from './displayList.js';
import { sortTasksToDisplay } from './sortTasksToBeDisplayed.js';
import { setCompleted } from './setCompleted.js';
import { deleteTask } from './deleteTask.js';
import { editTask, findIndex, setTaskToBeEdited } from './editTask.js';
import { updateTaskValues } from './editTask.js'; 
import { lists } from './taskLists.js';
import { displayProjectCount, displayTaskCount } from "./counter.js";
import { addNewProjectToList, iterateProjectId } from './newProject';
import { taskIndex, populateModal } from "./editTask.js";


startUp();


DOMManager.newTaskBtn.addEventListener('click', () => {
  toggleModal(DOMManager.newTaskModal);
});


DOMManager.closeNewTaskModal.addEventListener('click', () => {
  toggleModal(DOMManager.newTaskModal);
});


DOMManager.submitNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTaskToList();
  iterateTaskId();
  clearForm(DOMManager.newTaskModalForm);
  toggleModal(DOMManager.newTaskModal);
  setActiveList(lists.allTasks[lists.allTasks.length - 1]);
  activateSelector(activeList);
  sortTasksToDisplay(activeList);
  displayList();
  displayTaskCount();
  displayProjectCount();
});


DOMManager.submitChangesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  editTask(taskIndex);
  clearForm(DOMManager.editTaskModalForm);
  toggleModal(DOMManager.editTaskModal);
  sortTasksToDisplay(activeList);
  displayList();
  displayTaskCount();
  displayProjectCount();
})


DOMManager.submitNewProject.addEventListener('click', (e) => {
  e.preventDefault();
  addNewProjectToList();
  iterateProjectId();
  updateProjectSideBar();
  updateTaskModalProjectValues(DOMManager.project);
  updateTaskModalProjectValues(DOMManager.projectEdit);
  clearForm(DOMManager.newProjectForm);
  closeDetails(DOMManager.sidebarDetails);
});


window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!DOMManager.newTaskModal.classList.contains('closed')) {
      toggleModal(DOMManager.newTaskModal);
    } else if (!DOMManager.editTaskModal.classList.contains('closed')) {
      toggleModal(DOMManager.editTaskModal);
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
        displayTaskCount();
        displayProjectCount();
      } else if (e.target.tagName === 'IMG') {
          deleteTask(e);
          displayTaskCount();
          displayProjectCount();
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
      toggleModal(DOMManager.editTaskModal);
      const taskId = e.target.parentElement.parentElement.previousElementSibling.dataset.listId;
      setTaskToBeEdited(taskId);
      populateModal(taskId);
    });
  });
}