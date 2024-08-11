import { logTuning } from "./logger";

const tuningSelection = document.querySelector("#tuningSelectList");

let selectedTuning = "Standard";
const stringOrder = [];

//using a callback that is executed when the document has loaded, otherwise eventListener is null
document.addEventListener("DOMContentLoaded", function () {
  tuningSelection.addEventListener("change", (event) => {
    selectedTuning = event.target.value;
    logTuning();
  });
});

function populateStringOrder(
  firstString,
  secondString,
  thirdString,
  fourthString,
  fifthString,
  sixthString
) {}

export { selectedTuning, stringOrder, populateStringOrder };
