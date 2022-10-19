// import * as DOMManager from './domManager.js';
import { DOMManager } from "./domManager.js";
import { lists } from './taskLists.js';
import { projects } from './projectList.js';
import { isToday, parseISO, isBefore } from "date-fns";
import { weekFromToday } from './sortTasksToBeDisplayed.js';


export function displayTaskCount() {
  const todaysCount = _countToday();
  const nextWeeksCount = _countNextWeek(weekFromToday);
  const noDueDateCount = _countNoDueDate();
  const uncompletedCount = _countUncompleted();
  const completedCount = _countCompleted();
  
  DOMManager.todayCounter.textContent = todaysCount;
  DOMManager.nextWeekCounter.textContent = nextWeeksCount;
  DOMManager.noDueDateCounter.textContent = noDueDateCount;
  DOMManager.allUncompletedCounter.textContent = uncompletedCount;
  DOMManager.completedCounter.textContent = completedCount;
}

export function displayProjectCount() {
  DOMManager.projectsCounterLis.forEach((counter) => {
    _displayIndividualProjectCount(counter);
  });
}


function _countToday() {
  let today = 0;
  lists.allTasks.forEach((task) => {
    if (isToday(parseISO(task.dueDate)) && !task.completed) {
      today++;
    }
  });
  return today;
}

function _countNextWeek(weekFromToday) {
  let nextWeek = 0;
  lists.allTasks.forEach((task) => {
    if (isBefore(parseISO(task.dueDate), weekFromToday) && !task.completed) {
      nextWeek++;
    } 
  });
  return nextWeek;
} 

function _countNoDueDate() {
  let noDate = 0;
  lists.allTasks.forEach((task) => {
    if (task.dueDate === '' && !task.completed) {
      noDate++;
    }
  });
  return noDate;
}

function _countUncompleted() {
  let uncompleted = 0;
  lists.allTasks.forEach((task) => {
    if (!task.completed) {
      uncompleted++;
    }
  });
  return uncompleted;
}

function _countCompleted() {
  let completed = 0;
  lists.allTasks.forEach((task) => {
    if (task.completed === true) {
      completed++;
    }
  });
  return completed;
} 


export function _displayIndividualProjectCount(counter) {
  let liId = counter.dataset.projectNo;
  let projectCounter = countIndividualProject(liId);
  counter.textContent = projectCounter;
}


export function countIndividualProject(index) {
  let projectCounter = 0;
  lists.allTasks.forEach((task) => {
    if (task.project === projects.allProjects[index].projectName && !task.completed) {
      projectCounter++
    }
  });
  return projectCounter;
}