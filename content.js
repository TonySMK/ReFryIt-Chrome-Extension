console.log("FROM CONTENT SCRIPTS");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "forwardMessage") {
    console.log("Message from Popup:", request.message);
    // Handle the message as needed
  }
});
