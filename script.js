

document.addEventListener('scroll',
function()
{
	
});

window.onresize = window_load;

function window_load() 
{
	var windowHeight = document.body.clientHeight;
	var s = "width:" + window.innerWidth + " height:" + window.innerHeight + " window height:" + windowHeight;
	document.getElementById("text").innerHTML = s;
}