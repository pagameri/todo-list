import { DOMManager } from './domManager.js';
import { showSelectedList } from './showSetList.js';


export let activeList = 'today';

export function showActiveList(list) {
  DOMManager.listSelectors.forEach((selector => {
    if (list === undefined) {
      list = activeList;
    }
    activeList = list;
    if (selector.classList.contains('active')) {
      selector.classList.toggle('active');
    }
    if (selector.id === activeList) {
      selector.classList.toggle('active');
    }
  }));
  showSelectedList(list);
}