console.log(" FROM BACKGROUND/service worker");

chrome.contextMenus.create({
  id: "tldasdasd",
  title: "locale",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((clickdata) => {
  console.log(clickdata);
  if (clickdata) {
    chrome.storage.session.sync.set(clickdata).then((res) => {
      console.log(res);
    });
  }

  // chrome.storage.session.sync.get(["pageUrl"]).then((result) => {
  //   console.log("Value is " + result.key);
  // });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  console.log(sender);
  console.log(sendResponse);
  // let passage = chrome.contextMenus.onClicked.addListener((clickdata) => {
  //   return clickdata;
  // });
  sendResponse({ greeting2: "hello from background.js" });
});

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["content_scripts.js"],
//   });
// });

// chrome.runtime.sendMessage(
//   { greeting: ["sdfsfds", "3123123132", "2312321"] },
//   (response) => {
//     console.log(response);
//   }
// );

// (async () => {
//   const [tab] = await chrome.tabs.query({
//     active: true,
//     lastFocusedWindow: true,
//   });
//   const response = await chrome.tabs.sendMessage(tab.id, { greeting: "hello" });
//   // do something with response here, not outside the function
//   console.log(response);
// })();

// sam(value);

// function getSomeHighlight() {
//   chrome.contextMenus.onClicked.addListener((clickdata) => {
//     console.log(clickdata)

//     if(clickdata){

//     }
//   });
// }

// Call the getHighlight function to start listening for context menu clicks
// getSomeHighlight();
