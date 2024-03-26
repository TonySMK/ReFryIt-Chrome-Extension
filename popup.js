console.log("FROM POPUP");
const somebutton = document.querySelector(".getpassagebutton");
const placeholder = document.querySelector(".somepassage");
const form = document.querySelector(".formtag");
const formtitle = document.getElementById("formtitle");
const formhighlight = document.getElementById("formhighlight");
const fromgroup = document.getElementById("fromgroup");
const formdomain = document.getElementById("formdomain");
const formdomainpath = document.getElementById("formdomainpath");
const formfavicon = document.getElementById("favicon");
const somepassage = document.getElementById("somepassage");
const getinfobutton = document.querySelector(".getinfobutton");

// -------------------------------------------------
// EventListener for submittion button
somebutton.addEventListener("click", (e) => {
  e.preventDefault();

  const formTitleValue = formtitle.value;
  const formHighlightValue = formhighlight.value;
  const fromGroupValue = fromgroup.value;
  const formDomainValue = formdomain.value;
  const formDomainPathValue = formdomainpath.value;
  const formfaviconValue = formfavicon.value;

  dataobject = {
    title: formTitleValue,
    highlight_passage: formHighlightValue,
    group_id: fromGroupValue,
    domain: formDomainValue,
    domain_path: formDomainPathValue,
    favicon_url: formfaviconValue,
    star_status: 0,
    visit_count: 0,
  };

  postfetch(dataobject);

  window.close();
});

// -------------------------------------------------
getinfobutton.addEventListener("click", (e) => {
  console.log("you clicked getinfobutton!");
  try {
    chrome.runtime.sendMessage({ type: "getSessionStorage" }, (response) => {
      console.log(response);

      formhighlight.setAttribute("value", response.selectionText);
      somepassage.innerText = response.selectionText;
    });

    chrome.runtime.sendMessage({ type: "getPageContent" }, (response) => {
      console.log(response);

      formtitle.setAttribute("value", response.title);
      formdomain.setAttribute("value", getJustDomain(response.url));
      formdomainpath.setAttribute("value", getJustDomainPath(response.url));
      formfavicon.setAttribute("value", response.favIconUrl);
    });
  } catch (error) {
    console.log(error);
  }
});

// -------------------------------------------------
function postfetch(dataobject) {
  fetch("http://localhost:8080/api/highlights", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataobject),
  })
    .then((res) => {
      console.log(res);
      console.log("created!");
    })
    .catch((error) => console.log(error));
}

function getJustDomainPath(aString) {
  let array = aString.split("/").slice(3).join("/");
  let finalPathSting = `/${array}`;
  return finalPathSting;
}

function getJustDomain(aString) {
  let finalDomainSting = aString.split("/").slice(0, 3).join("/");
  return finalDomainSting;
}
