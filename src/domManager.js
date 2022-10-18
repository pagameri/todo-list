
export const DOMManager = (() => {
  const dueGroupSideBar = document.querySelector('.due-groups');
  const projectSideBar = document.querySelector('.projects');
  const sidebarDetails = document.querySelector('.side-details');
  const modalOverlay = document.querySelector('.modal-overlay');
  const newTaskBtn = document.querySelector('#add-new-task');
  const newTaskModal = document.querySelector('#new-task-modal');
  const editTaskModal = document.querySelector('#edit-task-modal');
  const selectProject = document.querySelector('#project');
  const projectName = document.querySelector('#project-name');
  const closeNewTaskModal = document.querySelector('#close-new-task');
  const closeEditTaskModal = document.querySelector('#close-edit-task');
  const submitNewTask = document.querySelector('#submit-new-task');
  const submitChangesBtn = document.querySelector('#submit-edit-task');
  const submitNewProject = document.querySelector('#submit-new-project');
  const tableBody = document.querySelector('tbody');
  const expendableRows = document.querySelectorAll('.expendable');
  const editBtns = document.querySelectorAll('.edit-btn');
  const newTaskModalForm = document.querySelector('form[name="new-task-form"]');
  const editTaskModalForm = document.querySelector('form[name="edit-task-form"]');
  const newProjectForm = document.querySelector('form[name="new-project-form"]');


  // form input
  const title = document.querySelector('#title-new');
  const dueDate = document.querySelector('#due-date-new');
  const dueTime = document.querySelector('#due-time-new');
  const priority = document.querySelector('#priority-new');
  const project = document.querySelector('#project-new');
  const description = document.querySelector('#description-new');
  const titleEdit = document.querySelector('#title-edit');
  const dueDateEdit = document.querySelector('#due-date-edit');
  const dueTimeEdit = document.querySelector('#due-time-edit');
  const priorityEdit = document.querySelector('#priority-edit');
  const projectEdit = document.querySelector('#project-edit');
  const descriptionEdit = document.querySelector('#description-edit');

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
  const projectsCounterLis = document.querySelectorAll('.project-counter');

  return {
    dueGroupSideBar,
    projectSideBar,
    sidebarDetails,
    modalOverlay,
    newTaskBtn,
    newTaskModal,
    editTaskModal,
    selectProject,
    projectName,
    closeNewTaskModal,
    closeEditTaskModal,
    submitNewTask,
    submitChangesBtn,
    submitNewProject,
    tableBody,
    expendableRows,
    editBtns,
    newTaskModalForm,
    editTaskModalForm,
    newProjectForm,


    // form input
    title,
    dueDate,
    dueTime,
    priority,
    project,
    description,
    titleEdit,
    dueDateEdit,
    dueTimeEdit,
    priorityEdit,
    projectEdit,
    descriptionEdit,

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
    projectsCounterLis,
  }
})()