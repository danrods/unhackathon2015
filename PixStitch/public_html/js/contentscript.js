function changeImageRandom(imgLink)
{
	var rand = (Math.Random() * $("img").length);
	$("img").get(rand).attr("src",imLink);
}
function changeImageClick(element,imgLink)
{

	$("img").get(rand).attr("src",imgLink);
}
function changeImageAll(imgLink)
{
	console.log("YESS SUCCESS");
	$("img").attr("src",imgLink);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log("EASDLKFJAKSDJFASDF");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });

