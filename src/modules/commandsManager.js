import manageOSCommands from "./operation-system/manageOSCommands.js";
import manageNWDCommands from "./nwd/manageNWDCommands.js";

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
};

export default commandsManager;
