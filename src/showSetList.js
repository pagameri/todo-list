import { DOMManager } from './domManager.js';
import { lists } from './list.js';
import { createRow, addCheckbox, fillRow, addHiddenDescription } from './populateTable.js';
import { findProjectIndex, projects } from './projects.js';


// export function showSelectedList(selectedList) {
//   if (selectedList === 'today') {
//     showList(lists.todaysTasks);
//   } else if (selectedList === 'next-week') {
//     showList(lists.nextWeeksTasks);
//   } else if (selectedList === 'no-date') {
//     showList(lists.noDueDateTasks);
//   } else if (selectedList === 'uncompleted') {
//     showList(lists.uncompletedTasks);
//   } else if (selectedList === 'completed') {
//     showList(lists.completedTasks);
//   } else {
//     let projectIndex = findProjectIndex(selectedList);
//     showList(projects.allProjects[projectIndex].elements);
//   }
// }


export function showSelectedList(selectedList) {
  let list = findList(selectedList);
  showList(list);
}


function showList(list) {
  let dataCount = 0;
  DOMManager.tableBody.innerHTML = '';

  if (list.length > 1) {
    sortListByDate(list);
  }

  list.forEach((element) => {
    let rowValues = [element.dueTime, element.title, element.project];
    let row = DOMManager.tableBody.insertRow();
    createRow(row, dataCount, 'expendable');
    addCheckbox(row, element.completed);
    fillRow(row, rowValues);
    addHiddenDescription(element);
    dataCount++;
  });
}


function sortListByDate(list) {
  list.sort((a, b) => {
    let x = new Date(a.fullDate).getTime();
    let y = new Date(b.fullDate).getTime();
    return x - y;
  });
}


export function findList(list) {
  if (list === 'today') {
    return lists.todaysTasks;
  } else if (list === 'next-week') {
    return lists.nextWeeksTasks;
  } else if (list === 'no-date') {
    return lists.noDueDateTasks;
  } else if (list === 'uncompleted') {
    return lists.uncompletedTasks;
  } else if (list === 'completed') {
    return lists.completedTasks;
  } else {
    let projectIndex = findProjectIndex(list);
    return projects.allProjects[projectIndex].elements;
  }
}