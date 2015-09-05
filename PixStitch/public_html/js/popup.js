$(document).ready( function(){
	ImageList = [
	/*banner:*/"https://s.zkcdn.net/Advertisers/bf6a160cde9746c890285a40334fe6c2.jpg",
	/*hungry*/ "http://static.wixstatic.com/media/be8b00_96febcabacc147abad31999821d45c14.jpg_srz_960_960_85_22_0.50_1.20_0.00_jpg_srz"

			]
/*

witch(request.greeting){
            case "random":
                changeImageRandom(request.imageLink);
            	break;
            case "secret":
                changeImageSecret(request.imageLink);
                break;
            case "all":    
  				hangeImageAll(request.imageLink);
             	break;
         	default:
            	console.log("WHOOP!! :) ");
  });
*/

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  		chrome.tabs.sendMessage(tabs[0].id, {ID: "hello", imageLink:ImageList[0]}, function(response) {
	  			if (response != null || response  != undefined)
	    			console.log(response.farewell);
	  		});
		});
	$("a").each(function(){
		$(this).click(function(){
			try {
				var str = $(this).attr('id');
				chrome.tabs.query({active: true, currentWindow: true }, function(tabs) {
			  		chrome.tabs.sendMessage(tabs[0].id, {ID: str, imageLink:ImageList[0]}, function(response) {
			  		});
				});
				console.log("done");
			}
			catch(err){
				console.log(err);
			}
		});
	});
});
