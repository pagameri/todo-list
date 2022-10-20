import { DOMManager } from '../domManager.js';
import { lists } from '../task/taskLists.js';
import { projects } from '../projects/projectList.js';
import { startOfToday, isToday, parseISO, addWeeks, isBefore } from "date-fns";


export const today = startOfToday();
export const weekFromToday = addWeeks(today, 1);


export function sortTasksToDisplay(selectorId) {
  lists.tasksToDisplay = [];

  if (selectorId === 'today') {
    lists.allTasks.forEach((task) => {
      if (isToday(parseISO(task.dueDate)) && !task.completed) {
        lists.addToDisplayedTasks(task);
      }
    });
  } else if (selectorId === 'next-week') {
    lists.allTasks.forEach((task) => {
      if (isBefore(parseISO(task.dueDate), weekFromToday) && !task.completed) {
        lists.addToDisplayedTasks(task);
      } 
    });
  } else if (selectorId === 'no-date') {
    lists.allTasks.forEach((task) => {
      if (task.dueDate === '' && !task.completed) {
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
        DOMManager.taskCards.forEach((card) => {
          card.classList.toggle('checked');
        })
      }
    });
  } else {
    projects.allProjects.forEach((project) => {
      if (project.projectName === selectorId) {
        lists.allTasks.forEach((task) => {
          if (task.project.toLowerCase() === selectorId && !task.completed) {
            lists.addToDisplayedTasks(task);
          }
        });
      }
    });
  }   
}
