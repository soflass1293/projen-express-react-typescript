import { monorepo } from "@aws/pdk";
import { javascript, typescript, web } from "projen";
const repo = new monorepo.MonorepoTsProject({
  name: "projen-express-react-typescript",
  devDeps: ["@aws/pdk", "husky"],
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  gitignore: ['.husky/pre-commit.command']
});
// @ts-ignore
const backend = new typescript.TypeScriptAppProject({
  name: "backend",
  defaultReleaseBranch: "main",
  parent: repo,
  outdir: "backend",
  packageManager: javascript.NodePackageManager.NPM,
  devDeps: ['nodemon', '@types/cors'],
  deps: ['express', 'cors', "dotenv"]
});
// @ts-ignore
const frontend = new web.ReactTypeScriptProject({
  name: "frontend",
  defaultReleaseBranch: "main",
  parent: repo,
  outdir: "frontend",
  homepage: "https://soflass1293.github.io/projen-express-react-typescript",
  packageManager: javascript.NodePackageManager.NPM,
  prettier: true
});
backend.addTask('dev', {
  exec: 'nodemon src/index.ts',
});
repo.addTask('dev', {
  exec: "REACT_APP_STAGE=dev npx projen run-many --all --targets=dev",
});
repo.synth();
