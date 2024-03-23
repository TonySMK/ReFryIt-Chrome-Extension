console.log("FROM POPUP");
const somebutton = document.querySelector(".getpassagebutton");
// console.log(somebutton);

const placeholder = document.querySelector(".somepassage");

let form = document.querySelector(".formtag");

const formtitle = document.getElementById("formtitle");
const formhighlight = document.getElementById("formhighlight");
const fromgroup = document.getElementById("fromgroup");
const formdomain = document.getElementById("formdomain");
const formdomainpath = document.getElementById("formdomainpath");

somebutton.addEventListener("click", (e) => {
  e.preventDefault();

  const formTitleValue = formtitle.value;
  const formHighlightValue = formhighlight.value;
  const fromGroupValue = fromgroup.value;
  const formDomainValue = formdomain.value;
  const formDomainPathValue = formdomainpath.value;

  dataobject = {
    title: formTitleValue,
    highlight_passage: formHighlightValue,
    group_id: fromGroupValue,
    domain: formDomainValue,
    domain_path: formDomainPathValue,
  };

  postfetch(dataobject);
});

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
// async function postfetch(dataobject) {
//   try {
//     const response = await fetch("http://localhost:8080/api/highlights", {
//       method: "POST",
//       body: JSON.stringify(dataobject),
//     });
//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function somefunction() {}

// button.addEventListener("click", () => {
//   chrome.runtime.sendMessage({ data: ["one", "two", "three"] }, (response) => {
//     console.log(response);
//     placeholder.innerText = response;
//   });
// });

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, { greeting: "Hello from popup.js!" });
// });
