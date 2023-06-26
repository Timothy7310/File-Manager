import getHash from "./commands/getHash.js";
import compressFile from "./commands/comressFile.js";
import decompressFile from "./commands/decompressFile.js";

import printErrorMessage from "../helpers/printErrorMessage.js";

const manageOtherOperation = (input) => {
  if (input.startsWith("hash")) {
    getHash(input);
    return;
  }
  if (input.startsWith("compress")) {
    compressFile(input);
    return;
  }
  if (input.startsWith("decompress")) {
    decompressFile(input);
    return;
  }

  printErrorMessage(
    "Invalid input🙀. Try use one of this commands:\nhash, add, compress, decompress"
  );
};

export default manageOtherOperation;
