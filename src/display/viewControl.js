// import * as DOMManager from './domManager.js';
import { DOMManager } from "../domManager.js";
import { attachListSelectorListener } from '../index.js';
import { projects } from '../projects/projectList.js';
import { weekFromToday } from './sortTasksToBeDisplayed.js';
import { countIndividualProject } from "./counter.js";
import { isToday, parseISO, isBefore } from "date-fns";

export let activeList = 'today';


export function activateSelector(list) {
  DOMManager.listSelectors.forEach((selector => {
    activeList = list;
    if (selector.classList.contains('active')) {
      selector.classList.toggle('active');
    }
    if (selector.id === activeList) {
      selector.classList.toggle('active');
    }
  }));
}


export function setActiveList(task) {
  if (activeList === task.project) {
    return;
  } else if (activeList === 'next-week' && isBefore(parseISO(task.dueDate), weekFromToday)) {
    return;
  } else if (activeList === 'uncompleted') {
    return;
  } else if (activeList === 'no-date' && task.dueDate === '') {
    return;
  } else if (isToday(parseISO(task.dueDate))) {
    activeList = 'today';
  } else if (isBefore(parseISO(task.dueDate), weekFromToday)) {
    activeList = 'next-week';
  } else {
    activeList = task.project;
  }
}


export function updateProjectSideBar() {
  DOMManager.projectSideBar.innerHTML = '';
  DOMManager.projectsCounter.innerHTML = '';
  projects.allProjects.forEach((project) => {
    _createNewProjectLi(project.projectName, project.projectId);
    _createProjectCounter(project.projectId);
  });
  DOMManager.listSelectors = document.querySelectorAll('.list-selectors');
  DOMManager.projectsCounterLis = document.querySelectorAll('.project-counter');
  attachListSelectorListener();
}


function _createNewProjectLi(name, id) {
  const li = document.createElement('li');
  li.textContent = _.upperFirst(name);
  li.dataset.projectId = id;
  li.setAttribute('id', name);
  li.classList.add('list-selectors');
  DOMManager.projectSideBar.appendChild(li);
}


function _createProjectCounter(id) {
  const liCounter = document.createElement('li');
  liCounter.classList.add('project-counter');
  liCounter.dataset.projectNo = id;
  liCounter.textContent = countIndividualProject(id);
  DOMManager.projectsCounter.appendChild(liCounter);
}