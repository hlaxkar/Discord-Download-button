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
    console.log("adding button to item number:", i);
    if (elem.classList.contains("hasDownloadBtn")) {
      console.log("already has a button at:", i);

      continue;
    }
    let btn = document.createElement("button");
    elem.classList.add("hasDownloadBtn");
    btn.classList.add("DownloadBtn");
    btn.innerText = "Download";

    // Button Click Download Event

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

// Main Script

setTimeout(() => {
  console.log("15 sec complete");

  //Add button styles
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".DownloadBtn { padding: 4px; background: #b5bac1; transition: all 0.2s ease;    font-weight: bold; } .DownloadBtn:hover{background:white}";

  document.getElementsByTagName("head")[0].appendChild(style);
  //---------------

  const chatType = document.getElementsByClassName("content-1SgpWY")[0];

  const chatTypeObserver = new MutationObserver((records) => {
    console.log("mutation fired in chatTypeObserver");
    for (let record of records) {
      if (record.addedNodes.length > 0) {
        for (let item of record.addedNodes) {
          if (item.className == "chat-2ZfjoI") {
            // mutationObserver.disconnect();
            const mainApp =
              document.getElementsByClassName("content-1jQy2l")[0];
            if (mainApp) {
              let items;
              const chatContainer = document.getElementsByClassName(
                "scrollerContent-2SW0kQ content-yjf30S"
              )[0];

              if (chatContainer) {
                console.log("chatContainer found");
                items = document.getElementsByClassName(
                  "mediaAttachmentsContainer-1WGRWy"
                );

                if (items) {
                  console.log("first items: ", items);
                  addBtn(items);
                }
                serverObserver.observe(mainApp, { childList: true });
              }
            }
          } else if (item.className == "chat-2ZfjoI background-fkKrXt") {
            const container =
              document.getElementsByClassName("container-Jqlbgl")[0];
            if (container) {
              console.log("container found, firiing mutationObserver");
              let items = document.getElementsByClassName(
                "mediaAttachmentsContainer-1WGRWy"
              );

              if (items.length > 0) {
                console.log("Home component first items ", items);
                addBtn(items);
              }
              mutationObserver.observe(container, { childList: true });
            }
          }
        }
      }
    }
  });
  const serverObserver = new MutationObserver(() => {
    let items;
    console.log("mutation fired in serverObserver");
    const chatContainer = document.getElementsByClassName(
      "scrollerContent-2SW0kQ content-yjf30S"
    )[0];
    if (chatContainer) {
      console.log("chatContainer found");
      items = document.getElementsByClassName(
        "mediaAttachmentsContainer-1WGRWy"
      );
      if (items) {
        // console.log("first items: ", items);
        addBtn(items);
      }

      mutationObserver.observe(chatContainer.children[0], { childList: true });
    }
  });

  const mutationObserver = new MutationObserver((entries) => {
    console.log("Mutation occured");
    entries.forEach((record) => {
      // console.log("Record:", record);
      for (let i = 0; i < record.addedNodes.length; i++) {
        let item;

        item = record.addedNodes[i].getElementsByClassName(
          "mediaAttachmentsContainer-1WGRWy"
        );
        if (item) {
          // console.log("Items: ", item);
          addBtn(item);
        }
      }
    });
  });

  chatTypeObserver.observe(chatType, { childList: true });
  let mainApp = document.getElementsByClassName("content-1jQy2l")[0];
  if (mainApp) {
    let items;
    const chatContainer = document.getElementsByClassName(
      "scrollerContent-2SW0kQ content-yjf30S"
    )[0];

    if (chatContainer) {
      console.log("chatContainer found");
      items = document.getElementsByClassName(
        "mediaAttachmentsContainer-1WGRWy"
      );

      if (items) {
        console.log("first items: ", items);
        addBtn(items);
      }
      serverObserver.observe(mainApp, { childList: true });
    }
  }
}, 15000);


{
  /* <div class="hoverButtonGroup-2yZIzC">
  <a
    class="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_ hoverButton-36QWJk"
    aria-label="Download"
    href="https://cdn.discordapp.com/attachments/1123710007335211078/1124174993861902346/zoom7_render.mov"
    rel="noreferrer noopener"
    target="_blank"
    role="button"
    tabindex="0"
  >
    <svg
      class="downloadHoverButtonIcon-16xasX"
      aria-hidden="true"
      role="img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
      ></path>
    </svg>
  </a>
</div>; */
}
