import path from "path";
import fs from "fs";
import isRoot from "../../helpers/isRoot.js";
import showCurrentPath from "../../helpers/showCurrentPath.js";

const changeDir = (currentPath, input) => {
  const [_, inputPath] = input.split("cd").map((x) => x.trim());

  const newPath = isRoot(inputPath)
    ? inputPath
    : path.join(currentPath.getPath(), inputPath);

  fs.access(newPath, (err) => {
    if (err) {
      console.log(
        `Invalid Input🚨 There is no directory like this: ${newPath}`
      );
    } else {
      currentPath.setPath(newPath);
      showCurrentPath(currentPath.getPath());
    }
  });
};

export default changeDir;
