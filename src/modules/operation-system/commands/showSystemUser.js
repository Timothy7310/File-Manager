import os from "os";
const showSystemUser = () => {
  return os.userInfo().username;
};

export default showSystemUser;
