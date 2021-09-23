
// let color = '#3aa757';



// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });



const audioFile = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ audioFile })
  console.log(`Audio file set to ${audioFile}`)
})


