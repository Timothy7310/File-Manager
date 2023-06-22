import os from "os";

const showEOL = () => {
  return JSON.stringify(os.EOL);
};

export default showEOL;
