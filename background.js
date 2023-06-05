  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "addDownloadBtn") {
      
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
          console.log('Download button clicked');
          let parent = event.target.parentNode;
          let containers = parent.getElementsByClassName("lazyImg-ewiNCh");
          

          for (let i = 0; i < containers.length; i++) {
            let downloadLink = containers[i].src.split("?")[0];
           
            console.log(downloadLink);
            fetch(downloadLink)
              .then((response) => response.blob())
              .then((blob) => {
                const url = URL.createObjectURL(blob);
                console.log('File Recieved, adding anchor for:', i);
                const link = document.createElement("a");
                link.href = url;
                link.download = `image_${i + 1}.jpg`;
                link.click();
        
                URL.revokeObjectURL(url);
              });
          }
        };
        // btn.onclick = sayhello
  
        elem.appendChild(btn);
        console.log("Button added");
      }
    }
  }

  function download(containers) {
    // let containers = document.getElementsByClassName("lazyImg-ewiNCh");
    for (let i = 0; i < containers.length; i++) {
      let downloadLink = containers[i].src.split("?")[0];
     
      console.log(downloadLink);
      fetch(downloadLink)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `image_${i + 1}.jpg`;
          link.click();
  
          URL.revokeObjectURL(url);
        });
    }
  }