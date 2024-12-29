// fifo.js - FIFO Page Replacement Algorithm
export function fifoPageReplacement(pages, frameSize) {
  let frames = [];
  let pageFaults = 0;

  for (let page of pages) {
    if (!frames.includes(page)) {
      // If the page is not in frames
      if (frames.length === frameSize) {
        frames.shift(); // Remove the oldest page
      }
      frames.push(page); // Add the new page
      pageFaults++;
    }
  }

  return pageFaults;
}
