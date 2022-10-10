import { DOMManager } from './domManager.js';
import { projectGroups } from './projects.js';


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


export function updateProjectSideBar() {
  DOMManager.projectSideBar.innerHTML = '';
  projectGroups.forEach((group) => {
    const li = document.createElement('li');
    li.textContent = _.upperFirst(group);
    li.setAttribute('id', group);
    li.classList.add('list-selectors');
    DOMManager.projectSideBar.appendChild(li);
  });
}