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
	$("img").attr("src",imgLink);
}