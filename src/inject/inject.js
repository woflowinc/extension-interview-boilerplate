let run = () => {
  console.log("Good start!")
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.trigger) {
    run()
  }
});
