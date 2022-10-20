
export function stylePriority(row, task) {
  if (task.priority === 'low') {
    if (task.completed === true) {
      row.style.color = 'grey;'
    } else {
      row.style.color = 'green';
    }
  } else if (task.priority === 'medium') {
    if (task.completed === true) {
      row.style.color = 'grey;'
    } else {
    row.style.color = 'rgb(255, 153, 0)';
    }
  } else if (task.priority === 'high') {
    if (task.completed === true) {
      row.style.color = 'grey;'
    } else {
    row.style.color = 'red';
    }
  }
}
