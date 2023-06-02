  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "addDownloadBtn") {
      //  console.log('message: ',message,'sender: ',sender,'sendResponse: ',sendResponse);
      chrome.scripting.executeScript({
        target: {tabId: message.tabid, allFrames: true},
        func: addDownloadBtn
      }).then(() => console.log("injected script file"));;
    }
  });
 

  function addDownloadBtn() {
    console.log("adding buttons");
    var items = document.getElementsByClassName("mediaAttachmentsContainer-1WGRWy");
    if (items) {
      console.log("items found", items);
  
      for (let i = 0; i < items.length; i++) {
        let elem = items[i];
        console.log('adding button to item number:', i);
        if (elem.classList.contains("hasDownloadBtn")) {
        console.log('already has a button at:', i);

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
  }