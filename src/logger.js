import { selectedTuning } from "./state";
//const selectedTuning = require("../src/state");

function logTuning() {
  console.log(`Selected tuning: ${selectedTuning}`);
}

export { logTuning };
/*
module.exports = {
  logTuning,
};
*/
