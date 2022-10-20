import './style/styles.css';
// import * as DOMManager from './domManager.js';
import { DOMManager } from "./domManager.js";
import { toggleModal, closeDetails, clearForm, updateTaskModalProjectValues } from './display/inputControl.js';
import { addNewTaskToList, iterateTaskId } from './task/newTask.js';
import { startUp } from './display/startUpDefault.js';
import { activeList, activateSelector, setActiveList, updateProjectSideBar } from './display/viewControl.js';
import { displayList } from './display/displayList.js';
import { sortTasksToDisplay } from './display/sortTasksToBeDisplayed.js';
import { setCompleted } from './task/setCompleted.js';
import { deleteTask } from './task/deleteTask.js';
import { editTask, setTaskToBeEdited, taskIndex, populateModal  } from './task/editTask.js';
import { lists } from './task/taskLists.js';
import { displayProjectCount, displayTaskCount } from "./display/counter.js";
import { addNewProjectToList, iterateProjectId } from './projects/newProject';



startUp();


DOMManager.newTaskBtn.addEventListener('click', () => {
  toggleModal(DOMManager.newTaskModal);
});


DOMManager.closeNewTaskModal.addEventListener('click', () => {
  toggleModal(DOMManager.newTaskModal);
});


DOMManager.closeEditTaskModal.addEventListener('click', ()=> {
  toggleModal(DOMManager.editTaskModal);
})


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


export function attachCardListener() {
  DOMManager.taskCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('more-info')) {
        e.target.parentElement.parentElement.nextElementSibling.classList.toggle('closed'); /* TODO: find a way for DOMManager version to work */
        e.target.classList.toggle('expand');
        e.target.parentElement.parentElement.classList.toggle('expand');
      } else if (e.target.tagName === 'INPUT') {
        setCompleted(e);
        sortTasksToDisplay(activeList);
        displayList();
        displayTaskCount();
        displayProjectCount();
      } else if (e.target.classList.contains('edit-project')) {
        toggleModal(DOMManager.editTaskModal);
        const taskId = e.target.dataset.id;
        setTaskToBeEdited(taskId);
        populateModal(taskId);

      } else if (e.target.classList.contains('delete-project')) {
        deleteTask(e);
        displayTaskCount();
        displayProjectCount();
      }

    });
  });
}


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
      const taskId = e.target.dataset.listId;
      setTaskToBeEdited(taskId);
      populateModal(taskId);
    });
  });
}