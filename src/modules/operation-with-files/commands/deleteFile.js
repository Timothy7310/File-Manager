import path from "path";
import fs from "fs";
import currentPath from "../../helpers/currentPath.js";

const deleteFile = (input) => {
  const [_, fileToDelete] = input.split("rm").map((x) => x.trim());
  const pathToFileDelete = path.join(currentPath.getPath(), fileToDelete);

  fs.rm(pathToFileDelete, (err) => {
    if (err) {
      console.log(`Invalid Input🚨 ${err.message}`, "\n");
    }
  });
};

export default deleteFile;
