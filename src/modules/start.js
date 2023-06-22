import os from "os";
import readline from "readline";
import { stdin, stdout } from "process";

import sayHello from "./helpers/sayHello.js";
import sayBye from "./helpers/sayBye.js";
import showCurrentPath from "./helpers/showCurrentPath.js";

const start = () => {
  let [_, userName] = process.argv
    .filter((x) => x.startsWith("--username"))
    .join("")
    .split("=");
  const currentPath = os.homedir();

  const rl = readline.createInterface({ input: stdin, output: stdout });

  if (userName) {
    sayHello(userName);
    showCurrentPath(currentPath);
  } else {
    rl.question(
      "Invalid input. I need to know your name. You can trust me :)\n\n",
      (answer) => {
        userName = answer;
        sayHello(userName);
        showCurrentPath(currentPath);
      }
    );
  }

  rl.on("line", (input) => {
    if (input.toLowerCase() === ".exit") {
      rl.close();
    }
  });

  rl.on("close", () => {
    sayBye(userName);
  });
};

export default start;
