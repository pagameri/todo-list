import { lists } from './list.js';
import { projectGroups } from './projects.js';
import { startOfToday, isToday, isPast, parseISO, addWeeks, isBefore } from "date-fns";


export function sortTasksToDisplay(selectorId) {
  let today = startOfToday();
  let weekFromToday = addWeeks(today, 1);
  lists.tasksToDisplay = [];

  if (selectorId === 'today') {
    lists.allTasks.forEach((task) => {
      if (isToday(parseISO(task.dueDate))) {
        lists.addToDisplayedTasks(task);
      }
    });
  } else if (selectorId === 'next-week') {
    lists.allTasks.forEach((task) => {
      if (isBefore(parseISO(task.dueDate), weekFromToday)) {
        lists.addToDisplayedTasks(task);
      } 
    });
  } else if (selectorId === 'no-date') {
    lists.allTasks.forEach((task) => {
      if (task.dueDate === '') {
        lists.addToDisplayedTasks(task);
      }
    });
  } else if (selectorId === 'uncompleted') {
    lists.allTasks.forEach((task) => {
      if (task.completed === false) {
        lists.addToDisplayedTasks(task);
      }
    });
  } else if (selectorId === 'completed') {
    lists.allTasks.forEach((task) => {
      if (task.completed === true) {
        lists.addToDisplayedTasks(task);
      }
    });
  } else {
    projectGroups.forEach((group) => {
      if (group === selectorId) {
        lists.allTasks.forEach((task) => {
          if (task.project.toLowerCase() === selectorId) {
            lists.addToDisplayedTasks(task);
          }
        });
      }
    });
  }   
}
