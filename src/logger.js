import { selectedTuning, stringOrder } from "./state";

function logTuning() {
  console.log(`Selected tuning: ${selectedTuning}`);
  console.log(`${selectedTuning}'s string order: ${stringOrder}`);
}

export { logTuning };
