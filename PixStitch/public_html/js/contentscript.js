function changeImageSecret(imgLink) // the first one...
{
	//var rand = Math.floor((Math.random() * $("img").length));
	var image = $("img").first();
	console.log(image);
	var imgg = image.clone();
	imgg.attr("src", imgLink + "?timestamp=" + new Date().getTime());
	var parent = image.parent();
 	image.remove();
 	parent.append(imgg);
}
function changeImageClick(element,imgLink)
{
	$("img").get(rand).attr("src",imgLink);

	//.add("click", switchImage($(this), imgLink))
}
function changeImageAll(imgLink)
{
	var images = $("img");
	images.each( function(){
		switchImage($(this),imgLink);
	});
}
function switchImage(img, imgLink){
	var imgg = img.clone();
	imgg.attr("src", imgLink + "?timestamp=" + new Date().getTime());
	var parent = img.parent();
	img.remove();
	parent.append(imgg);
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
  		changeImageAll("https://s.zkcdn.net/Advertisers/bf6a160cde9746c890285a40334fe6c2.jpg");
  });

