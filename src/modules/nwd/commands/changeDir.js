import path from "path";
import fs from "fs";

const changeDir = (currentPath, input) => {
  const [_, inputPath] = input.split("cd").map((x) => x.trim());

  let newPath = path.join(currentPath.getPath(), inputPath);
  const isRoot = inputPath.split("")[1] === ":";

  if (isRoot) {
    newPath = inputPath;
    console.log(newPath);
  }

  fs.access(newPath, (err) => {
    if (err) {
      console.log(`Invalid Input, there is no directory like this: ${newPath}`);
    } else {
      currentPath.setPath(newPath);
    }
  });
};

export default changeDir;
