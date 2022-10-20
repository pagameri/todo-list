export const projects = {
  allProjects: [
    {
      projectId: 0,
      projectName: 'general',
    },
    {
      projectId: 1,
      projectName: 'family',
    },
    {
      projectId: 2,
      projectName: 'chores',
    },
    {
      projectId: 3,
      projectName: 'car',
    },
    {
      projectId: 4,
      projectName: 'grocery',
    },
  ],

  addToAllProjects(project) {
    this.allProjects.push(project);
    return this;
  },

}

