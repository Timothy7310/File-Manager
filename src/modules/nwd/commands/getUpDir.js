import path from "path";

const getUpDir = (currentPath) => {
  currentPath.setPath(path.join(currentPath.getPath(), ".."));
};

export default getUpDir;
