export default class Project {
  constructor(projectId, projectName) {
    this._projectId = projectId;
    this._projectName = projectName;
  }

  get projectId() {
    return this._projectId;
  }

  set projectId(value) {
    if (value) {
      this._projectId = value;
    }
  }

  get projectName() {
    return this._projectName;
  }

  set projectName(value) {
    if (value) {
      this._projectName = value;
    }
  }
}
