import { DOMManager } from "./domManager";


export function createTaskCard() {
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');

  DOMManager.mainContent.appendChild(taskCard);
}

export function createTaskInfo() {
  const taskInfo = document.createElement('div.');
  taskInfo.classList.add('task-info');

  taskCard.appendChild(taskInfo);
}


export function fillTaskInfo(task) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.dataset.id = task.id;
  if (task.completed === true) {
    checkbox.checked = true;
    checkbox.parentElement.parentElement.classList.toggle('checked');
  } 
  taskInfo.appendChild(checkbox);
  
  const taskEl = document.createElement('div');
  taskEl.classList.add('task');
  taskEl.dataset.id = task.id;
  taskEl.textContent = task.title;
  taskInfo.appendChild(taskEl);
  
  const project = document.createElement('div');
  project.classList.add('project');
  project.dataset.id = task.id;
  project.textContent = task.project;
  taskInfo.appendChild(project);
}

export function createTaskControl() {
  const taskControl = document.createElement('div');
  taskControl.classList.add('task-control');

  taskCard.appendChild(taskControl);
}

export function fillTaskControl(task) {
  const moreInfo = document.createElement('button');
  moreInfo.classList.add('more-info');
  moreInfo.dataset.id = task.id;
  taskControl.appendChild(moreInfo);

  const moveProject = document.createElement('button');
  moveProject.classList.add('move-project');
  moveProject.dataset.id = task.id;
  taskControl.appendChild(moveProject);

  const editProject = document.createElement('button');
  editProject.classList.add('edit-project')
  editProject.dataset.id = task.id;
  taskControl.appendChild(editProject);

  const deleteProject = document.createElement('button');
  deleteProject.classList.add('delete-project');
  deleteProject.dataset.id = task.id;
  taskControl.appendChild(deleteProject);
}

export function createDescription() {
  const description = document.createElement('div');
  description.classList.add('description');

  taskCard.appendChild(description);
}

