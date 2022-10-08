import { DOMManager } from "./index.js";
import { Task, lists } from "./list.js";
import { projects } from "./projects.js";
import { showList } from "./showSetList.js";
import { addTaskToDueList } from "./updateLists.js";
import _ from 'lodash';


export function createNewTask() {
  let task = new Task(
    DOMManager.title.value,
    DOMManager.dueDate.value,
    DOMManager.dueTime.value,
    DOMManager.alert.value,
    DOMManager.repeat.value, 
    DOMManager.ends.value, 
    DOMManager.endDate.value, 
    DOMManager.priority.value,
    DOMManager.project.value,
    DOMManager.description.value,
    false,
  );
  lists.addToAllTasks(task);

  // let taskProject = task.project.toLowerCase();
  // let projectIndex;
  // findProjectIndex(taskProject);

  // function findProjectIndex(taskProject) {
  //   projects.allProjects.forEach((project) => {
  //   if (taskProject === project.projectName) {
  //     projectIndex = _.findIndex(projects.allProjects, {'projectName': taskProject});
  //   }
  //   });
  // }
  
  // projects.allProjects[projectIndex].elements.push(task);
  projects.addTaskToProjects(task);

  addTaskToDueList(task)
}
 