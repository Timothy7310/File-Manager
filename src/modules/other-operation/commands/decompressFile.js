import path from "path";
import fs from "fs";
import currentPath from "../../helpers/currentPath.js";
import isRoot from "../../helpers/isRoot.js";
import zlib from "zlib";

const decompressFile = (input) => {
  const [_, [compressedFile, fileToDecompress]] = input
    .split("decompress")
    .map((x) => x.trim())
    .map((x) => x.split(" "));

  const pathToFileCompressed = isRoot(compressedFile) ?
    compressedFile :
    path.join(currentPath.getPath(), compressedFile);

  const pathToDecompressFile = isRoot(fileToDecompress) ?
    path.join(
      fileToDecompress,
      path
      .basename(compressedFile)
      .split(".")
      .filter((x, _index, arr) => x !== arr.at(-1))
      .join(".")
    ) :
    path.join(currentPath.getPath(), fileToDecompress, path
      .basename(compressedFile)
      .split(".")
      .filter((x, _index, arr) => x !== arr.at(-1))
      .join("."));

      console.log(pathToDecompressFile);

  const decompress = zlib.createBrotliDecompress();
  const readStream = fs.createReadStream(pathToFileCompressed);
  const writeStream = fs.createWriteStream(pathToDecompressFile);

  readStream.on("error", (err) => {
    console.log(`Invalid Input🚨 ${err.message}`);
  });
  writeStream.on("error", (err) => {
    console.log(`Invalid Input🚨 ${err.message}`);
  });

  readStream.pipe(decompress).pipe(writeStream);
};

export default decompressFile;