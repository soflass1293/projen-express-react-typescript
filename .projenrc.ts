import { javascript, web, typescript } from "projen";
import { monorepo } from "@aws/pdk";
const repo = new monorepo.MonorepoTsProject({
  name: "projen-express-react-typescript",
  devDeps: ["@aws/pdk"],
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
});
// @ts-ignore
const backend = new typescript.TypeScriptAppProject({
  name: "backend",
  defaultReleaseBranch: "main",
  parent: repo,
  outdir: "backend",
  packageManager: javascript.NodePackageManager.NPM,
  devDeps: ['nodemon', '@types/cors'],
  deps: ['express', 'cors']
});
// @ts-ignore
const frontend = new web.ReactTypeScriptProject({
  name: "frontend",
  defaultReleaseBranch: "main",
  parent: repo,
  outdir: "frontend",
  packageManager: javascript.NodePackageManager.NPM,
  prettier: true
});
backend.addTask('dev', {
  exec: 'nodemon src/index.ts',
});
repo.addTask('dev', {
  exec: 'npx projen run-many --all --targets=dev',
});
repo.synth();
