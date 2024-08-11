import { selectedTuning, stringOrder, populateStringOrder } from "../src/state";
//const selectedTuning = require("../src/state");
//const stringOrder = require("../src/state");
//const populateStringOrder = require("../src/state");

test("Tunings should use correct string order", () => {
  if (selectedTuning === "Standard") {
    expect(stringOrder).toEqual(["E", "A", "D", "G", "B", "E"]);
  }
});
