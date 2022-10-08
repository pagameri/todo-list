import { DOMManager } from './index.js';
import { lists } from './list.js';
import { createRow, addCheckbox, fillRow, addHiddenDescription } from './populateTable.js';
import { findProjectIndex, projects } from './projects.js';


export function showSelectedList(selectedList) {
  if (selectedList === 'today') {
    showList(lists.todaysTasks);
  } else if (selectedList === 'next-week') {
    showList(lists.nextWeeksTasks);
  } else if (selectedList === 'no-date') {
    showList(lists.noDueDateTasks);
  } else if (selectedList === 'uncompleted') {
    showList(lists.uncompletedTasks);
  } else if (selectedList === 'completed') {
    showList(lists.completedTasks);
  } else {
    let projectIndex = findProjectIndex(selectedList);
    showList(projects.allProjects[projectIndex].elements);
  }
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
    addCheckbox(row);
    fillRow(row, rowValues);
    addHiddenDescription(element);
  });
}


function sortListByDate(list) {
  list.sort((a, b) => {
    let x = new Date(a.fullDate).getTime();
    let y = new Date(b.fullDate).getTime();
    return x - y;
  });
}
