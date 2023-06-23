import readline from "readline";
import { stdin, stdout } from "process";

import sayHello from "./helpers/sayHello.js";
import sayBye from "./helpers/sayBye.js";
import showCurrentPath from "./helpers/showCurrentPath.js";

import commandsManager from "./commandsManager.js";
import currentPath from "./helpers/currentPath.js";

const start = () => {
  let [_, userName] = process.argv
    .filter((x) => x.startsWith("--username"))
    .join("")
    .split("=");

  const rl = readline.createInterface({ input: stdin, output: stdout });

  if (userName) {
    sayHello(userName);
    showCurrentPath(currentPath.getPath());
  } else {
    rl.question(
      "Invalid input. I need to know your name. You can trust me :)\n\n",
      (answer) => {
        userName = answer;
        sayHello(userName);
        showCurrentPath(currentPath.getPath());
      }
    );
  }

  rl.on("line", (input) => {
    commandsManager(input, rl);

    if (!input.startsWith("cd ")) {
      showCurrentPath(currentPath.getPath());
    }
  });

  rl.on("close", () => {
    sayBye(userName);
  });
};

export default start;
