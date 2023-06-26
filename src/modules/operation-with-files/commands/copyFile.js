import path from "path";
import fs from "fs";
import currentPath from "../../helpers/currentPath.js";
import isRoot from "../../helpers/isRoot.js";

const copyFile = (input, options = { flag: "copy" }) => {
  const [_, [fileToCopy, newFile]] = input
    .split(options.flag === "copy" ? "cp" : "mv")
    .map((x) => x.trim())
    .map((x) => x.split(" "));

  const pathToFileCopy = isRoot(fileToCopy)
    ? fileToCopy
    : path.join(currentPath.getPath(), fileToCopy);
  const pathToNewFile = isRoot(newFile)
    ? path.join(
        newFile,
        isRoot(fileToCopy) ? fileToCopy.split("/").at(-1) : fileToCopy
      )
    : path.join(currentPath.getPath(), newFile, fileToCopy);

  const readStream = fs.createReadStream(pathToFileCopy);
  const writeStream = fs.createWriteStream(pathToNewFile);

  readStream.on("error", (err) => {
    console.log(`Operation failed🚨: ${err.message}`, "\n");
  });
  writeStream.on("error", (err) => {
    console.log(`Operation failed🚨: ${err.message}`, "\n");
  });

  writeStream.on("finish", () => {
    if (options.flag === "move") {
      fs.rm(pathToFileCopy, (err) => {
        if (err) {
          console.log(`Operation failed🚨: ${err.message}`, "\n");
        }
      });
    }
  });

  readStream.pipe(writeStream);
};

export default copyFile;
