import path from "path";
import fs from "fs";
import currentPath from "../../helpers/currentPath.js";

const createFile = (input) => {
  const [_, fileName] = input.split("add").map((x) => x.trim());
  const newFile = path.join(currentPath.getPath(), fileName);

  fs.writeFile(newFile, "", (err) => {
    if (err) {
      console.log(`Operation failed🚨, ${err.message}`, "\n");
    }
  });
};

export default createFile;
