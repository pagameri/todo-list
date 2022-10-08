import _ from 'lodash';


export class Project {
  constructor(projectName, elements) {
    this.projectName = projectName;
    this.elements = elements;
  }
}

export let projectValues = ['general', 'family', 'chores', 'car', 'grocery'];


export let projects = {
  allProjects: [],

  addNewProject(projectName) {
    let newProject = new Project(projectName, []);
    this.allProjects.push(newProject);
    return this;
  },

  addTaskToProjects(task) {
    let projectInTask = task.project.toLowerCase();
    let projectIndex = findProjectIndex(projectInTask);
    
    projects.allProjects[projectIndex].elements.push(task);
  }
}


export function findProjectIndex(projectToFind) {
  let projectIndex;
  projects.allProjects.forEach((project) => {
    if (projectToFind === project.projectName) {
      projectIndex = _.findIndex(projects.allProjects, {'projectName': projectToFind});
    }
  });
  return projectIndex;
}