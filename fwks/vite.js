import { execSync } from "child_process";

const setupViteApp = () => {
    console.log("\nSetting up a Vite app...");
    execSync("npm create vite@latest . -- --template react", { stdio: "inherit" });
};

export default setupViteApp;