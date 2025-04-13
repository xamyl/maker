import { execSync } from "child_process";

const setupNuxtApp = () => {
  console.log("\nSetting up a Nuxt app...");
  execSync("npx nuxi init .", { stdio: "inherit" });
  console.log("\nNow run 'cd app && npm install' to install dependencies.");
};

export default setupNuxtApp;