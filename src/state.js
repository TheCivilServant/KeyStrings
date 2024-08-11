import { logTuning } from "./logger";
//const logTuning = require("./logger");

const tuningSelection = document.querySelector("#tuningSelectList");

let selectedTuning = "Standard";
const stringOrder = [];

tuningSelection.addEventListener("change", (event) => {
  selectedTuning = event.target.value;
  logTuning();
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
/*
module.exports = {
  selectedTuning,
  stringOrder,
  populateStringOrder,
};
*/
