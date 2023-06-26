import readFile from "./commands/readFile.js";
import createFile from "./commands/createFile.js";
import renameFile from "./commands/renameFile.js";
import copyFile from "./commands/copyFile.js";
import moveFile from "./commands/moveFile.js";
import deleteFile from "./commands/deleteFile.js";

import printErrorMessage from "../helpers/printErrorMessage.js";

const manageOWFcommands = (input) => {
  if (input.startsWith("cat")) {
    readFile(input);
    return;
  }
  if (input.startsWith("add")) {
    createFile(input);
    return;
  }
  if (input.startsWith("rn")) {
    renameFile(input);
    return;
  }
  if (input.startsWith("cp")) {
    copyFile(input);
    return;
  }
  if (input.startsWith("mv")) {
    moveFile(input);
    return;
  }
  if (input.startsWith("rm")) {
    deleteFile(input);
    return;
  }

  printErrorMessage(
    "Invalid input🙀. Try use one of this commands:\ncat, add, rn, cp, mv, rm"
  );
};

export default manageOWFcommands;
