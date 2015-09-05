$(document).ready( function(){
	var ImageList = {
	/*hungry*/ "Hungry":"http://static.wixstatic.com/media/be8b00_96febcabacc147abad31999821d45c14.jpg_srz_960_960_85_22_0.50_1.20_0.00_jpg_srz",
	/*Jesus*/ "Jesus":"https://gregorycrofford.files.wordpress.com/2014/08/eucharist.jpg",
	/*MAD*/ "flower": "https://external.fphl1-1.fna.fbcdn.net/safe_image.php?d=AQBmvgwX5E6eQNHh&w=960&h=960&url=http%3A%2F%2Fwww.scaryforkids.com%2Fpics%2Fclown-movies.jpg",
	/*Lizard*/ "lizard" :"http://cliparts.co/cliparts/di4/orx/di4orx9AT.jpg"
			}

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  		chrome.tabs.sendMessage(tabs[0].id, {ID: "hello", imageLink:ImageList["Hungry"]}, function(response) {
	  			if (response != null || response  != undefined)
	    			console.log(response.farewell);
	  		});
		});
	$("a").each(function(){
		$(this).click(function(){
			try {
				var str = $(this).attr('id');
				chrome.tabs.query({active: true, currentWindow: true }, function(tabs) {
			  		chrome.tabs.sendMessage(tabs[0].id, {ID: str, imageLink:ImageList["Hungry"]}, function(response) {
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
