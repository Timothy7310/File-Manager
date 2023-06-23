import path from "path";
import fs from "fs";
import currentPath from "../../helpers/currentPath.js";

const renameFile = (input) => {
  const [_, [oldFile, newFile]] = input
    .split("rn")
    .map((x) => x.trim())
    .map((x) => x.split(" "));

  const oldPath = path.join(currentPath.getPath(), oldFile);
  const newPath = path.join(currentPath.getPath(), newFile);

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.log(`Invalid Input🚨. ${err.message}`, "\n");
    }
  });
};

export default renameFile;
