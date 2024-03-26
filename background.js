console.log(" FROM BACKGROUND/service worker");

chrome.contextMenus.create({
  id: "tldasdasd",
  title: "locale",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((clickdata) => {
  setstorageTest(clickdata);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getSessionStorage") {
    chrome.storage.session.get(null, function (result) {
      sendResponse(result);
      console.log(result);
    });
    return true;
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getPageContent") {
    getCurrentTab().then((res) => {
      sendResponse(res);
    });
  }
  return true;
});

//----------------------------------------------------

async function setstorageTest(object) {
  try {
    await chrome.storage.session.set(object);
    console.log("storage info created");
  } catch (error) {
    console.log(error);
  }
}

async function getCurrentTab() {
  // lifted from chrome extension docs
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
