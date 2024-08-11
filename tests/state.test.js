import { selectedTuning, stringOrder, populateStringOrder } from "../src/state";

test("Tunings should use correct string order", () => {
  if (selectedTuning === "Standard") {
    expect(stringOrder).toEqual(["E", "A", "D", "G", "B", "E"]);
  } else if (selectedTuning === "Drop D") {
    expect(stringOrder).toEqual(["D", "A", "D", "G", "B", "E"]);
  }
});
