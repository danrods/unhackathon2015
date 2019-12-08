console.log("background call");
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log("inputEntered: " + text);
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  		chrome.tabs.sendMessage(tabs[0].id, {greeting: "omni", text:text}, function(response) {
		  		});
			});
    
    alert('You just typed "' + text + '"');
  });