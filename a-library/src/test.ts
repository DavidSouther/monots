import { dashCase } from "./case.js";

if (dashCase("aWord") !== "a-word") {
  throw new Error("Bad dash casing!");
}
console.log("Tests passed");
