chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "addDownloadBtn") {
       console.log('message: ',message,'sender: ',sender,'sendResponse: ',sendResponse);
      scripting.executeScript({
        target: {tabId: sender.id, allFrames: true},
        code: addDownloadBtn.toString() 
      });
    }
  });
  


  function addDownloadBtn() {
    console.log("adding buttons");
    var items = document.getElementsByClassName("contents-2MsGLg");
    if (items) {
      console.log("items found", items);
  
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
  }