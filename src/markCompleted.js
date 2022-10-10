import { lists } from './list.js';
import { updateDueList } from './updateLists.js';
import { activeList } from './viewControl.js';
import { findList } from './showSetList.js';

export function markCompleted(index) {
  let list = findList(activeList);
  let taskId = list[index].id;
  lists.setCompleted(taskId);
  updateDueList(index, list);
}

