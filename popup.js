// var items = document.getElementsByClassName("contents-2MsGLg");
// console.log(document);
document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
    if (url.startsWith("https://discord.com/channels")) {
      document.getElementById("tabName").textContent = "Hello!";
      document.getElementById("condition").style = "display: block";

    } else {
      var tabName = tab.title;
      document.getElementById("tabName").textContent = tabName;
      document.getElementById("condition").style = "display: none";

    }
    var btn = document.getElementById("downloadbtn");
    btn.addEventListener("click", function () {
      console.log("i am clicked");
    });
    var btnadder = document.getElementById("btnadder");
    btnadder.addEventListener("click", () => {
      chrome.runtime.sendMessage({
        action: "addDownloadBtn",
        tabid: tab.id
        
      });
    });
  });
});

function addBtn(headers) {
  for (let i = 0; i < headers.length; i++) {
    let elem = headers[i];
    if (elem.classList.contains("hasDownloadBtn")) {
      continue;
    }
    let btn = document.createElement("button");
    elem.classList.add("hasDownloadBtn");
    btn.classList.add("DownloadBtn");
    btn.innerText = "Download";
    btn.onclick = (event) => {
      console.log(event.parentNode);
    };

    elem.appendChild(btn);
    console.log("Button added");
  }
}
