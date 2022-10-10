import { lists } from "./list.js";
import { startOfToday, isToday, isPast, parseISO, addWeeks, isBefore } from "date-fns";


export function addTaskToDueList(task) {
  let today = startOfToday();
  let weekFromToday = addWeeks(today, 1);

  if (task.completed) {
    lists.addToCompletedTasks(task);
  } else {
    lists.addToUncompletedTasks(task);

    if (isToday(parseISO(task.dueDate))) {
      lists.addToTodaysTasks(task);
    }
    
    if (isBefore(parseISO(task.dueDate), weekFromToday)) {
      lists.addToNextWeeksTask(task);
    } else if (task.dueDate === '') {
      lists.addToNoDueDateTasks(task);
    } else if (isPast(parseISO(task.dueDate))) {
      lists.addToPastTasks(task);
    } 
  } 
}


export function updateDueList() {
  lists.clearLists();
  lists.allTasks.forEach((task) => {
    addTaskToDueList(task);
  });
}

