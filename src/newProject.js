// import * as DOMManager from "./domManager.js";
import { DOMManager } from "./domManager.js";
import Project from "./class/project.js";
import { projects } from "./projectList.js";


let projectId = projects.allProjects.length;

export function addNewProjectToList() {
  let newProjectName = DOMManager.projectName.value;
  newProjectName = newProjectName.toLowerCase();
  const newProject = new Project(projectId, newProjectName)
  projects.allProjects.push(newProject);
  // projects.projectNames.push(newProjectName)
}

export function iterateProjectId() {
  projectId++;
}