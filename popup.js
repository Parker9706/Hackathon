// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let playMusic = document.getElementById("playMusic");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

playMusic.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: testPlay,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function playThatLofi() {
  console.log('Hello the button got clicked!!')
var myAudio = new Audio("./lofi/chillbeats.mp3");
myAudio.play();
}


function testPlay() {
  chrome.storage.sync.get("audioFile", ({ audioFile }) => {
    console.log('button clicked')
    const audioElement = document.createElement("audio");
    audioElement.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
    document.body.appendChild(audioElement);
  })
}

function play() {
  console.log("playing...")
  var audio = document.getElementById("audio");
  audio.play();
}