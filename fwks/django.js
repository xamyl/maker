import { execSync } from "child_process";
import fs from "fs";

const setupDjangoApp = () => {
  console.log("\nSetting up a Django app...");
  fs.mkdirSync("app");
  process.chdir("app");
  execSync("pip install django", { stdio: "inherit" });
  execSync("django-admin startproject mysite .", { stdio: "inherit" });
};

export default setupDjangoApp;