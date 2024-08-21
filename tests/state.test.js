import { selectedTuning, stringOrder, populateStringOrder } from "../src/state";

test("Tunings should use correct string order", () => {
  if (selectedTuning === "Standard") {
    expect(stringOrder).toEqual(["E", "A", "D", "G", "B", "E"]);
  } else if (selectedTuning === "Drop D") {
    expect(stringOrder).toEqual(["D", "A", "D", "G", "B", "E"]);
  } else if (selectedTuning === "Drop C") {
    expect(stringOrder).toEqual(["C", "G", "C", "F", "A", "D"]);
  } else if (selectedTuning === "B Standard") {
    expect(stringOrder).toEqual(["B", "E", "A", "D", "F#", "B"]);
  } else if (selectedTuning === "Open D") {
    expect(stringOrder).toEqual(["D", "A", "D", "F#", "A", "D"]);
  }
});
