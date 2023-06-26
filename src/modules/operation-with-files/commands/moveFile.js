import copyFile from "./copyFile.js";

const moveFile = (input) => {
  copyFile(input, { flag: "move" });
};

export default moveFile;
