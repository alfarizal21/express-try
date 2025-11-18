import fs from "fs";
import path from "path";

export const loadModules = () => {
  const modulesDir = path.join(__dirname, "..", "modules");
  const folders = fs.readdirSync(modulesDir);

  const loadedModules: any[] = [];

  folders.forEach((folder) => {
    const folderPath = path.join(modulesDir, folder);

    if (!fs.lstatSync(folderPath).isDirectory()) return;

    const possibleFiles = ["index.js", "index.ts"];

    for (const file of possibleFiles) {
      const fullPath = path.join(folderPath, file);

      if (fs.existsSync(fullPath)) {
        const mod = require(fullPath);

        // detect exported module
        const exported = Object.values(mod)[0];

        loadedModules.push(exported);
        return;
      }
    }
  });

  return loadedModules;
};
