const { spawn } = require("child_process");

const execCmd = (params) => {
  const cmd = spawn(process.platform === "win32" ? "yarn.cmd" : "yarn", params);
  cmd.stdout.on("data", (data) => {
    // console.log(`stdout: ${data}`);
  });

  cmd.stderr.on("data", (data) => {
    console.log(`%cstderr: ${data}`, "color: #39f");
  });
  cmd.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
(async function main() {
  execCmd(["run", "build:watch"]);
  execCmd(["run", "build:theme:watch"]);
  execCmd(["run", "dev"]);
})();
