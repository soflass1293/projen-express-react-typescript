import { javascript } from "projen";
import { monorepo } from "@aws/pdk";
const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "projen-express-react-typescript",
  packageManager: javascript.NodePackageManager.YARN,
  projenrcTs: true,
});
project.synth();