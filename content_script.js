console.log("FROM CONTENT SCRIPTS");
alert("Hello, world!");

// chrome.runtime.sendMessage(
//   { greeting: ["sdfsfds", "3123123132", "2312321"] },
//   (response) => {
//     console.log(response);
//   }
// );

// chrome.storage.local.set({ name: "sdfsdf" }).then(console.log("value is set"));
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
// });

// let url = chrome.tabs.query(
//   { active: true, lastFocusedWindow: true },
//   (tabs) => {
//     let url = tabs[0].url;
//     // use `url` here inside the callback because it's asynchronous!
//   }
// );

// console.log(url);

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log(message.greeting); // Outputs: "Hello from popup.js!"
//   // Handle the message as needed
// });
