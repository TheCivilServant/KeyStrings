import { logTuning } from "./logger";

const tuningSelection = document.querySelector("#tuningSelectList");

let selectedTuning;
let stringOrder;

//using a callback that is executed when the document has loaded, otherwise eventListener is null
document.addEventListener("DOMContentLoaded", function () {
  tuningSelection.addEventListener("change", (event) => {
    selectedTuning = event.target.value;
    populateStringOrder(selectedTuning);
    logTuning();
  });
});

function populateStringOrder(tuning) {
  switch (tuning) {
    case "Standard":
      stringOrder = ["E", "A", "D", "G", "B", "E"];
      break;
    case "Drop D":
      stringOrder = ["D", "A", "D", "G", "B", "E"];
      break;
    default:
      console.log("Select a tuning");
  }
}

export { selectedTuning, stringOrder, populateStringOrder };
