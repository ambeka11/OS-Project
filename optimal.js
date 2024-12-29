export function optimalPageReplacement(pages, frameSize) {
  let frames = [];
  let pageFaults = 0;

  for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    if (!frames.includes(page)) {
      // If the page is not in frames
      if (frames.length === frameSize) {
        let farthest = i + 1;
        let replaceIndex = -1;

        for (let j = 0; j < frames.length; j++) {
          let nextIndex = pages.slice(i + 1).indexOf(frames[j]);
          if (nextIndex === -1) {
            // Page not needed in future
            replaceIndex = j;
            break;
          }
          if (nextIndex > farthest) {
            farthest = nextIndex;
            replaceIndex = j;
          }
        }

        if (replaceIndex === -1) {
          replaceIndex = 0; // If all pages are used in the future
        }
        frames.splice(replaceIndex, 1); // Remove the chosen page
      }
      frames.push(page); // Add the new page
      pageFaults++;
    }
  }

  return pageFaults;
}
