import os from "os";

class CurrentPath {
  constructor() {
    this.path = os.homedir();
  }

  setPath(newPath) {
    this.path = newPath;
  }

  getPath() {
    return this.path;
  }
}
const currentPath = new CurrentPath();

export default currentPath;
