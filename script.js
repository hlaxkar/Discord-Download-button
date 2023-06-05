// Import stylesheets
function sayhello(){
  console.log('Hello Everyone, thanks for pressing the button!');
}
// Write Javascript code!
console.log('File loaded');


function download(event) {
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
  }

// let headers = document.getElementsByClassName('header-2jRmjb');
// addBtn(headers);

function addDownloadBtn() {
  items = document.getElementsByClassName("contents-2MsGLg");

  addBtn(items);
}

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
  }
}

function addlistitems() {
  let item = document.createElement("li");
  item.innerHTML =
    '<li id="chat-messages-1105363640523177986-1112613353886588969" class="messageListItem-ZZ7v6g" aria-setsize="-1"><div class="message-2CShn3 cozyMessage-1DWF9U wrapper-30-Nkg cozy-VmLDNB zalgo-26OfGz" role="article" data-list-item-id="chat-messages___chat-messages-1105363640523177986-1112613353886588969" tabindex="-1" aria-setsize="-1" aria-roledescription="Message" aria-labelledby="message-username-1112612936935018496 uid_1 message-accessories-1112613353886588969 uid_2 message-timestamp-1112613353886588969"><div class="contents-2MsGLg"><span class="latin24CompactTimeStamp-2pXUBq timestamp-p1Df1m timestampVisibleOnHover-9PEuZS alt-1dvXnH"><time aria-label="May 29, 2023 10:58 AM" id="message-timestamp-1112613353886588969" datetime="2023-05-29T05:28:14.923Z"><i class="separator-AebOhG" aria-hidden="true">[</i>10:58 AM<i class="separator-AebOhG" aria-hidden="true">] </i></time></span><div id="message-content-1112613353886588969" class="markup-eYLPri messageContent-2t3eCI"></div></div><div id="message-accessories-1112613353886588969" class="container-2sjPya"><div class="mediaAttachmentsContainer-1WGRWy"><div class="oneByTwoGrid-25mx0i"><div class="oneByTwoGridItem-2sqHh9"><div class="messageAttachment-CZp8Iv messageAttachmentNoJustify-lIzP9c messageAttachmentFullWidth-21dFmL messageAttachmentMediaMosaic-2ic1yt hideOverflow-bsO1Md"><div class="imageContent-3Av-9c embedWrapper-1MtIDg attachmentContentContainer-3WAhvQ attachmentContentItem-UKeiCx"><div class="imageContainer-10XenG"><div class="imageWrapper-oMkQl4 imageZoom-3yLCXY clickable-LksVCf lazyImgContainer-3k3gRy" style="display: block; max-height: inherit; margin: auto; width: 100%; height: 100%;"><a tabindex="-1" aria-hidden="true" class="originalLink-Azwuo9" href="https://cdn.discordapp.com/attachments/1105363640523177986/1112613353475538964/Screenshot_20230528_212801_Viking_Rise.jpg" data-role="img"></a><div class="clickableWrapper-2WTAkL" tabindex="0" aria-label="Image" aria-describedby="uid_4" role="button"><img class="lazyImg-ewiNCh" alt="Image" src="https://media.discordapp.net/attachments/1105363640523177986/1112613353475538964/Screenshot_20230528_212801_Viking_Rise.jpg?width=273&amp;height=273" style="display: block; object-fit: cover; min-width: 100%; min-height: 100%; max-width: calc(100% + 1px);"></div></div></div></div></div></div><div class="oneByTwoGridItem-2sqHh9"><div class="messageAttachment-CZp8Iv messageAttachmentNoJustify-lIzP9c messageAttachmentFullWidth-21dFmL messageAttachmentMediaMosaic-2ic1yt hideOverflow-bsO1Md"><div class="imageContent-3Av-9c embedWrapper-1MtIDg attachmentContentContainer-3WAhvQ attachmentContentItem-UKeiCx"><div class="imageContainer-10XenG"><div class="imageWrapper-oMkQl4 imageZoom-3yLCXY clickable-LksVCf lazyImgContainer-3k3gRy" style="display: block; max-height: inherit; margin: auto; width: 100%; height: 100%;"><a tabindex="-1" aria-hidden="true" class="originalLink-Azwuo9" href="https://cdn.discordapp.com/attachments/1105363640523177986/1112613353706237962/Screenshot_20230528_212755_Viking_Rise.jpg" data-role="img"></a><div class="clickableWrapper-2WTAkL" tabindex="0" aria-label="Image" aria-describedby="uid_4" role="button"><img class="lazyImg-ewiNCh" alt="Image" src="https://media.discordapp.net/attachments/1105363640523177986/1112613353706237962/Screenshot_20230528_212755_Viking_Rise.jpg?width=273&amp;height=273" style="display: block; object-fit: cover; min-width: 100%; min-height: 100%; max-width: calc(100% + 1px);"></div></div></div></div></div></div></div></div></div><div class="buttonContainer-1502pf"><div class="buttons-3dF5Kd container-2gUZhU" role="group" aria-label="Message Actions"></div></div></div></div></div></li>';

  body = document.getElementById("list");
  console.log(body);
  body.appendChild(item);
}
// downloadeds();s
