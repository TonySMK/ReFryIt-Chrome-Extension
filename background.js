console.log(" FROM BACKGROUND/service worker");

console.log(this);

chrome.contextMenus.create({
  id: "tldasdasd",
  title: "locale",
  contexts: ["selection"],
});

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(request);
//   console.log(sender);
//   console.log(sendResponse);
//   // let passage = chrome.contextMenus.onClicked.addListener((clickdata) => {
//   //   return clickdata;
//   // });
//   sendResponse({ data: "fdfsdfs" });
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
