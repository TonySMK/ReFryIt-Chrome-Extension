console.log(" FROM BACKGROUND/service worker");

let data;

chrome.contextMenus.create({
  id: "tldasdasd",
  title: "locale",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((clickdata) => {
  // console.log(clickdata);
  setstorageTest(clickdata);
  // console.log(getstorageTest()); // this is returning a pending promise
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // this block listens for a message call, if messsage call has correct
  // request.type, then it* will then pase the chrome.ext storage api
  // and then send the parsed object back to popup.js as the reponse

  // console.log(request);
  // console.log(sender);
  // console.log(sendResponse);

  if (request.type === "getSessionStorage") {
    chrome.storage.session.get(null, function (result) {
      // this "null" refers to getting the entire content of the storage scope
      sendResponse(result);
    });
    // Return true to indicate that sendResponse will be called asynchronously
    return true;
    // sendResponse({ greeting2: "hello from background.js" });
  }
});

async function setstorageTest(object) {
  try {
    await chrome.storage.session.set(object);
    // const result = await chrome.storage.session.get(["selectionText"]);
    // console.log(result);
    console.log("storage info created");
  } catch (error) {
    console.log(error);
  }
}

// async function getstorageTest() {
//   try {
//     await chrome.storage.session.get("selectionText").then((res) => {
//       console.log(res);
//     });
//     // console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
