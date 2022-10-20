import { DOMManager } from "../domManager";


export function createTaskCard(task) {
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');

  const mainRow = document.createElement('div');
  mainRow.classList.add('main-row');

  addCheckbox(task);

  const taskInfo = document.createElement('div.');
  taskInfo.classList.add('task-info');

  const taskControl = document.createElement('div');
  taskControl.classList.add('task-control');

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container', 'closed');
  descriptionContainer.dataset.id = task.id;

  
  mainRow.appendChild(taskInfo);
  mainRow.appendChild(taskControl);
  DOMManager.mainContent.appendChild(taskCard);
  taskCard.appendChild(mainRow);
  taskCard.appendChild(descriptionContainer);
  

  fillTaskInfo(task);
  fillTaskControl(task);
  fillDescriptionCard(task);


  function addCheckbox(task) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.dataset.id = task.id;
    if (task.completed === true) {
      checkbox.checked = true;
    }
    mainRow.appendChild(checkbox);
  }


  function fillTaskInfo(task) {
    const taskEl = document.createElement('div');
    taskEl.classList.add('task');
    taskEl.dataset.id = task.id;
    taskEl.textContent = task.title;
    taskInfo.appendChild(taskEl);

    const extras = document.createElement('div');
    extras.classList.add('extras');
    extras.dataset.id = task.id;
    taskInfo.appendChild(extras);

    if (task.dueTime) {
      const time = document.createElement('div');
      time.classList.add('time');
      time.dataset.id = task.id;
      time.textContent = task.dueTime;
      extras.appendChild(time);
    }
  }

  function fillTaskControl(task) {
    const moreInfo = document.createElement('button');
    moreInfo.classList.add('more-info');
    moreInfo.dataset.id = task.id;
    taskControl.appendChild(moreInfo);

    const editProject = document.createElement('button');
    editProject.classList.add('edit-project')
    editProject.dataset.id = task.id;
    taskControl.appendChild(editProject);

    const deleteProject = document.createElement('button');
    deleteProject.classList.add('delete-project');
    deleteProject.dataset.id = task.id;
    taskControl.appendChild(deleteProject);
  }

  function fillDescriptionCard(task) {
    const description = document.createElement('div');
    description.classList.add('description');
    description.dataset.id = task.id;
    description.textContent = task.description;
    descriptionContainer.appendChild(description);

    const project = document.createElement('div');
    project.classList.add('project');
    project.dataset.id = task.id;
    project.textContent = task.project;
    descriptionContainer.appendChild(project);
  }
}
