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

const somedata = [];
// let somedata;
// -------------------------------------------------
// EventListener for submittion button
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

  window.close();
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
// -------------------------------------------------

let getinfobutton = document.querySelector(".getinfobutton");

getinfobutton.addEventListener("click", (e) => {
  console.log("you clicked getinfobutton!");

  chrome.runtime.sendMessage({ type: "getSessionStorage" }, (response) => {
    // here wer have stored the response to a globally scoped variable
    // console.log(response);

    // for (let i = 0; i)
    // for (const property in response) {
    //   console.log(`${property}: ${response[property]}`);

    //   // instead of pushing the objects into an array, we might be able to
    //   // assign each value to an input element
    //   somedata.push({ property: response[property] });
    //   console.log(somedata); // instead ofs
    // }

    console.log(Object.keys(response).length);
    moveData(response);
  });
});

// -------------------------------------------------
function moveData(reponseData) {
  for (let i = 0; i < 1; i++) {
    // console.log("sdasda");
    for (const property in reponseData) {
      console.log(`${property}: ${reponseData[property]}`);

      // instead of pushing the objects into an array, we might be able to
      // assign each value to an input element
      somedata.push(reponseData[property]);
    }
    console.log(somedata); // instead ofs
  }
}

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
