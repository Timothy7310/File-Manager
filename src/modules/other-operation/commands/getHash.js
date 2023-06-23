import path from "path";
import fs from "fs";
import crypto from "crypto";
import currentPath from "../../helpers/currentPath.js";
import isRoot from "../../helpers/isRoot.js";

const getHash = (input) => {
  const [_, hashFile] = input.split(" ").map((x) => x.trim());
  const pathToHashFile = isRoot(hashFile)
    ? hashFile
    : path.join(currentPath.getPath(), hashFile);

  fs.stat(pathToHashFile, (err, stat) => {
    if (err === null) {
      if (stat.isFile()) {
        fs.readFile(pathToHashFile, "utf-8", (err, data) => {
          if (err) {
            console.log(`Invalid Input🚨 ${err.message}`, "\n");
          }
          console.log(
            crypto.createHash("sha256").update(data).digest("hex"),
            "\n"
          );
        });
      } else {
        console.log(
          "Invalid Input🚨 This is directory. We need some file to get hash🥺",
          "\n"
        );
      }
    } else {
      console.log(`Invalid Input🚨 ${err.message}`, "\n");
    }
  });
};

export default getHash;
