import showEOL from "./commands/showEOL.js";
import showCPUs from "./commands/showCPUs.js";
import showHomeDir from "./commands/showHomeDir.js";
import showSystemUser from "./commands/showSystemUser.js";
import showCPUArch from "./commands/showCPUArch.js";

import printMessage from "../helpers/printMessage.js";
import printErrorMessage from "../helpers/printErrorMessage.js";

const manageOSCommands = (input) => {
  switch (input) {
    case "os --EOL":
      printMessage(showEOL());
      break;
    case "os --cpus":
      printMessage(showCPUs());
      break;
    case "os --homedir":
      printMessage(showHomeDir());
      break;
    case "os --username":
      printMessage(showSystemUser());
      break;
    case "os --architecture":
      printMessage(showCPUArch());
      break;
    default:
      printErrorMessage(
        `Invalid input. Try use one of this arguments:\n--EOL, --cpus, --homedir, --username, --architecture`
      );
      break;
  }
};

export default manageOSCommands;
