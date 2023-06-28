function senddownload(event) {
  console.log("senddownload executed");
  chrome.runtime.sendMessage({
    action: "download",
    event: event,
  });
}

function download(event) {
  console.log("Download button clicked");
  let parent = event.target.parentNode;
  let containers = parent.getElementsByClassName("lazyImg-ewiNCh");

  for (let i = 0; i < containers.length; i++) {
    let downloadLink = containers[i].src.split("?")[0];
    console.log(downloadLink);
    fetch(downloadLink)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        console.log("File Recieved, adding anchor for:", i);
        const link = document.createElement("a");
        link.href = url;
        link.download = `image_${i + 1}.jpg`;
        link.click();

        URL.revokeObjectURL(url);
      });
  }
}



function addDownloadBtn() {
  console.log("addDownloadBtn() is executing");
  items = document.getElementsByClassName("contents-2MsGLg");
  console.log("Items: ", items);

  addBtn(items);
}

function addBtn(items) {
  for (let i = 0; i < items.length; i++) {
    let elem = items[i];
    // console.log("adding button to item number:", i);
    if (elem.classList.contains("hasDownloadBtn")) {
      // console.log("already has a button at:", i);

      continue;
    }
    let btn = document.createElement("button");
    elem.classList.add("hasDownloadBtn");
    btn.classList.add("DownloadBtn");
    btn.innerText = "Download";
    btn.onclick = (event) => {
      // console.log("Download button clicked");
      let parent = event.target.parentNode;
      let containers = parent.getElementsByClassName("lazyImg-ewiNCh");

      for (let i = 0; i < containers.length; i++) {
        let downloadLink = containers[i].src.split("?")[0];
        let filename = downloadLink.match("/([^/]+)$")[1];

        fetch(downloadLink)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            // console.log("File Recieved, adding anchor for:", i);
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            link.click();
            URL.revokeObjectURL(url);
          });
      }
    };

    elem.appendChild(btn);
    // console.log("Button added");
  }
}

function addlistitems() {
  let item = document.createElement("li");
  item.innerHTML = "sdsdasd";
  body = document.getElementById("list");
  console.log(body);
  body.appendChild(item);
}

setTimeout(() => {
  console.log("15 sec complete");

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.DownloadBtn { padding: 4px; background: #b5bac1; transition: all 0.2s ease;    font-weight: bold; } .DownloadBtn:hover{background:white}';

  document.getElementsByTagName('head')[0].appendChild(style);



  const chatType  =document.getElementsByClassName(
    "content-1SgpWY"
  )[0];
  
  const mainApp = document.getElementsByClassName(
    "content-1jQy2l"
  )[0];
  

const serverObserver  = new MutationObserver(()=>{
console.log('mutation fired in childList');
  const chatContainer = document.getElementsByClassName(
    "scrollerContent-2SW0kQ content-yjf30S"
  )[0].children[0];
  if (chatContainer) {
    console.log("chatContainer found");
    items = document.getElementsByClassName("mediaAttachmentsContainer-1WGRWy");
    if (items) {
      // console.log("first items: ", items);
      addBtn(items);
    }

    mutationObserver.observe(chatContainer, { childList: true });
  }
});



  const mutationObserver = new MutationObserver((entries) => {
    console.log("Mutation occured");
    entries.forEach((record) => {
      // console.log("Record:", record);
      for(let i=0; i<record.addedNodes.length;i++){
      let item
        
        item = record.addedNodes[i].getElementsByClassName("mediaAttachmentsContainer-1WGRWy");
        if (item) {
          // console.log("Items: ", item);
          addBtn(item);
        }
      }   
    });
  });
  
if(mainApp){

  serverObserver.observe(mainApp,{childList:true})
}
}, 15000);

// // Select the node that will be observed for mutations
// const targetNode = document.getElementsByClassName('content-1SgpWY')

// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };
