import path from "path";
import currentPath from "../../helpers/currentPath.js";
import fs from "fs";
import isRoot from "../../helpers/isRoot.js";

const readFile = (input) => {
  const [_, inputPath] = input.split("cat").map((x) => x.trim());

  const pathToRead = isRoot(inputPath)
    ? inputPath
    : path.join(currentPath.getPath(), inputPath);

  fs.access(pathToRead, (err) => {
    if (err) {
      console.log(
        `Invalid Input🚨 There is no file like this: ${pathToRead}`,
        "\n"
      );
    } else {
      const stream = fs.createReadStream(pathToRead, "utf-8");

      stream.on("error", (err) => {
        if (err.code === "EISDIR") {
          console.log("Dude, this is directory🤨 Try read some file", "\n");
        } else {
          console.log("Invalid Input🚨", "\n");
        }
      });

      stream.on("data", (data) => {
        console.log(data, "\n");
      });
    }
  });
};

export default readFile;
