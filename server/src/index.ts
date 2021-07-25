import { lowercase } from "common";
import { Common } from "common/types";
import { assert } from "common/assert";

const common: Common = {
  a: lowercase("Common"),
  b: 5,
};

assert(common.a == "common", "math");
