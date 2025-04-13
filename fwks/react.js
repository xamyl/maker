import { execSync } from "child_process";

const setupReactApp = () => {
  console.log("\nSetting up a React app...");
  execSync("npx create-react-app .", { stdio: "inherit" });
};

export default setupReactApp;