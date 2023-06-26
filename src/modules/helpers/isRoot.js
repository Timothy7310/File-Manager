const isRoot = (path) => {
  return path.split("")[1] === ":";
};

export default isRoot;
