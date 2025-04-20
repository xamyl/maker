import { execSync } from "child_process";

const setupReactApp = () => {
  console.log("\nSetting up a Next.js app...");
  execSync("npx create-next-app .", { stdio: "inherit" });
};

export default setupReactApp;