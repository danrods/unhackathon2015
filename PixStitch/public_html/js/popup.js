

/* selected tab sends message to the content script */
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {url: ""}, function(response) {
    console.log(response.farewell);
  });
});

