
  
  document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      var url = tab.url;
      if (url.startsWith("https://discord.com/channels")) {
        document.getElementById("tabName").textContent = "Hello!";
      } else {
        var tabName = tab.title;
        document.getElementById("tabName").textContent = tabName;
      }
    });
  });
  