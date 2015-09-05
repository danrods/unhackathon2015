$(document).ready( function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	  			if (response != null || response  != undefined)
	    			console.log(response.farewell);
	  		});
		});
	$("a").each(function(){
		$(this).click(function(){
		console.log("clicked button");
		try {
			console.log("event activated, incomplete")
			console.log($(this).attr('id'));
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  		chrome.tabs.sendMessage(tabs[0].id, {greeting: "sdf " + $(this).attr('id')}, function(response) {
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
