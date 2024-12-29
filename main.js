//thiss file calls the both functions and outputs the results
import { fifoPageReplacement } from "./FIFO.js";
import { optimalPageReplacement } from "./optimal.js";

// Example Usage
const pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
const frameSize = 3;

console.log("FIFO Page Faults:", fifoPageReplacement(pages, frameSize));
console.log("Optimal Page Faults:", optimalPageReplacement(pages, frameSize));
