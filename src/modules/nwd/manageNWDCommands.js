import showLS from "./commands/showLS.js";

import printErrorMessage from "../helpers/printErrorMessage.js";
import getUpDir from "./commands/getUpDir.js";
import changeDir from "./commands/changeDir.js";
import currentPath from "../helpers/currentPath.js";

const manageNWDCommands = (input) => {
  if (input === "up") {
    getUpDir(currentPath);
    return;
  }
  if (input === "ls") {
    showLS(currentPath.getPath());
    return;
  }
  if (input.startsWith("cd ")) {
    changeDir(currentPath, input);
    return;
  }
  printErrorMessage("Invalid input.");
};

export default manageNWDCommands;
