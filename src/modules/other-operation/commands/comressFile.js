import path from "path";
import fs from "fs";
import currentPath from "../../helpers/currentPath.js";
import isRoot from "../../helpers/isRoot.js";
import zlib from "zlib";

const compressFile = (input) => {
  const [_, [fileToCompress, compressedFile]] = input
    .split("compress")
    .map((x) => x.trim())
    .map((x) => x.split(" "));

  const pathToFileCompress = isRoot(fileToCompress)
    ? fileToCompress
    : path.join(currentPath.getPath(), fileToCompress);
  const pathToCompressedFile = isRoot(compressedFile)
    ? path.join(
        compressedFile,
        isRoot(fileToCompress)
          ? `${fileToCompress.split("/").at(-1)}.br`
          : `${fileToCompress}.br`
      )
    : path.join(currentPath.getPath(), compressedFile, fileToCompress);

  const compress = zlib.createBrotliCompress();
  const readStream = fs.createReadStream(pathToFileCompress, "utf8");
  const writeStream = fs.createWriteStream(pathToCompressedFile, "utf8");

  readStream.on("error", (err) => {
    console.log(`Invalid Input🚨 ${err.message}`);
  });
  writeStream.on("error", (err) => {
    console.log(`Invalid Input🚨 ${err.message}`);
  });

  readStream.pipe(compress).pipe(writeStream);
};

export default compressFile;
