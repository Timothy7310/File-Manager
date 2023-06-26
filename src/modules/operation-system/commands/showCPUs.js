import os from "os";

const showCPUs = () => {
  return os
    .cpus()
    .map((x) => ({ mode: x.model, speed: (x.speed / 1000).toFixed(3) }));
};

export default showCPUs;
