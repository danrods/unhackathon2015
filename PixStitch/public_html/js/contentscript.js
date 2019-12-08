function changeImageRandom(imgLink)
{
	var rand = Math.floor((Math.random() * $("img").length));
	console.log(rand);
 	var image = $("img").get(rand).attr("src",imgLink);
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
function changeTextTransition(text){
    console.log("Changing Text");
    //$("p").each(function(){
    //   $(this).css("font-weight:bold;animation-name: example; animation-duration: 4s;") 
    //});
    
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting != null)
    	console.log(request.greeting);
    else
    	console.log("ADSFLKJADSFLKASD");
    //getting objects in message, use request.greeting
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
    if (request.greeting == "something")
  		changeImageRandom("https://s.zkcdn.net/Advertisers/bf6a160cde9746c890285a40334fe6c2.jpg");
    if(request.greeting == "omni")
      console.log("hmm");
        alert("Hmm");
    ///changeTextTransition(request.text);
  });

