import { dashCase } from "a-library/case.js";
import { argv } from "process";

console.log(argv.map(dashCase));
