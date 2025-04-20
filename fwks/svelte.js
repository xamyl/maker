import { execSync } from "child_process";

const setupReactApp = () => {
  console.log("\nSetting up a Svelte app...");
  execSync("npx sv create .", { stdio: "inherit" });
};

export default SetupSvelteApp;