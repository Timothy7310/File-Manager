import manageOSComands from "./operation-system/manageOSComands.js";

const commandsManager = (input, readline) => {
  if (input === ".exit") {
    readline.close();
  }
  if (input.startsWith("os")) {
    manageOSComands(input);
    return;
  }
};

export default commandsManager;
