#!/usr/bin/env node

import fs from "fs";
import inquirer from "inquirer";

import setupReactApp from "./fwks/react.js";
import setupViteApp from "./fwks/vite.js";
import setupNuxtApp from "./fwks/nuxt.js";
import setupDjangoApp from "./fwks/django.js";
import setupSvelteApp from "./fwks/svelte.js";

const templates = {
  react: setupReactApp,
  vite: setupViteApp,
  nuxt: setupNuxtApp,
  django: setupDjangoApp,
  svelte: setupSvelteApp,
  sveltekit: setupSvelteApp,
};

(async () => {
  const { framework, folder } = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "What kind of project would you like to create?",
      choices: ["react", "vite", "nuxt", "django", "svelte", "sveltekit"],
    },
    {
      type: "input",
      name: "folder",
      message: "What should the project folder be called?",
    },
  ]);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  process.chdir(folder);
  templates[framework]();

  console.log("\n✅ Done! Your project is ready. See you next time!");
})();