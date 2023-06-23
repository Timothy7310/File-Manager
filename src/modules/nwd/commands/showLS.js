import fs from "fs";

const showLS = (path) => {
  fs.readdir(path, { withFileTypes: true }, (_err, files) => {
    console.table(
      files.map((file) => ({
        Name: file.name,
        Type: file.isFile() ? "file" : "directory",
      }))
    );
    console.log();
  });
};

export default showLS;
