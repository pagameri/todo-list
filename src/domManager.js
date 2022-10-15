

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
  const submitChangesBtn = document.querySelector('#submit-task-changes');
  const submitNewProject = document.querySelector('#submit-new-project');
  const tableBody = document.querySelector('tbody');
  const expendableRows = document.querySelectorAll('.expendable');
  const editBtns = document.querySelectorAll('.edit-btn');
  const modalForm = document.querySelector('form[name="new-task-form"]');

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
  const todayCounter = document.getElementById('today-counter');
  const nextWeek = document.getElementById('next-week');
  const nextWeekCounter = document.getElementById('next-week-counter');
  const noDueDate = document.getElementById('no-date');
  const noDueDateCounter = document.getElementById('no-date-counter');
  const allUncompleted = document.getElementById('uncompleted');
  const allUncompletedCounter = document.getElementById('uncompleted-counter');
  const completed = document.getElementById('completed');
  const completedCounter = document.getElementById('completed-counter');
  const projectsCounter = document.querySelector('.projects-counter');
  const projectsCounters = document.querySelectorAll('.project-counter');

  return {
    dueGroupSideBar,
    projectSideBar,
    sidebarDetails,
    newTaskBtn,
    newTaskModal,
    selectProject,
    inputProjectName,
    modalOverlay,
    closeNewTaskModal,
    submitNewTask,
    submitChangesBtn, 
    submitNewProject,
    tableBody,
    expendableRows,
    editBtns,
    modalForm,
    
    // form
    title,
    dueDate,
    dueTime,
    alert,
    repeat,
    ends,
    endDate,
    priority,
    project,
    description,
    
    // sidebar selectors
    listSelectors,
    today,
    todayCounter,
    nextWeek,
    nextWeekCounter,
    noDueDate,
    noDueDateCounter,
    allUncompleted,
    allUncompletedCounter,
    completed,
    completedCounter,
    projectsCounter,
    projectsCounters,
  }
})();