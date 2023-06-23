import manageOSCommands from "./operation-system/manageOSCommands.js";
import manageNWDCommands from "./nwd/manageNWDCommands.js";
import manageOWFcommands from "./operation-with-files/manageOWFcommands.js";

const commandsManager = (input, readline, currentPath) => {
  if (input === ".exit") {
    readline.close();
  }
  if (input.startsWith("os")) {
    manageOSCommands(input);
    return;
  }

  if (
    input.startsWith("up") ||
    input.startsWith("cd") ||
    input.startsWith("ls")
  ) {
    manageNWDCommands(input, currentPath);
    return;
  }

  if (
    input.startsWith("cat") ||
    input.startsWith("add") ||
    input.startsWith("rn") ||
    input.startsWith("cp") ||
    input.startsWith("mv") ||
    input.startsWith("rm")
  ) {
    manageOWFcommands(input);
    return;
  }
};

export default commandsManager;
