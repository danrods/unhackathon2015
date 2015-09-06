function changeImageRandom(imgLink) // RANDOM
{
	var rand = Math.floor((Math.random() * $("img").length));
	var rimage = $("img").eq(rand);
 	switchImage(rimage,imgLink);
}
function changeImageSecret(imgLink) // the first one...
{
	var image = $("img").first();
 	switchImage(image,imgLink);
}
function changeImageAll(imgLink) //TODOS LOS FOTOS
{
	var images = $("img");
	images.each( function(){
		switchImage($(this),imgLink);
	});
}
function switchImage(img, imgLink){ // helper functions... :) 
	var imgg = img.clone();
	imgg.attr("src", imgLink);
	var parent = img.parent();
	img.remove();
	parent.append(imgg);
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    //getting objects in message, use request.greeting
    console.log(request.imageLink);
     switch(request.ID){
            case "random":
                changeImageRandom(request.imageLink);
            	break;
            case "secret":
                changeImageSecret(request.imageLink);
                break;
            case "all":    
  				changeImageAll(request.imageLink);
             	break;
         	default:
            	console.log("WHOOP!! :) ");
  }});

