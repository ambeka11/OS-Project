//  FIFO Page Replacement Algorithm
// it keeps track of pages in memory
// it also replace the oldest page when a new page causes a page fault

export function fifoPageReplacement(pages, frameSize) {
  let frames = []; //an empty array, which keeps track of pages in memory
  let pageFault = 0; //counts how many times a page is not found in memory and needs to be loaded.

  for (let page of pages) {
    if (!frames.includes(page)) {
      // If the page is not in frames
      if (frames.length === frameSize) {
        frames.shift(); // remove the oldest page
      }
      frames.push(page); // Add the new page
      pageFault++; //increases the page fault
    }
  }

  return pageFault; //returns the no of page fault
}
