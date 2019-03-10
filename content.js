chrome.runtime.onMessage.addListener(gotMessage);

async function gotMessage(message, sender, sendResponse){
	var Memes = await apicall();
	var imgs = document.getElementsByTagName('img');
	for(var img of imgs){
		index = Math.floor(Math.random()*100);
		ratio = Memes.data.memes[index].width/Memes.data.memes[index].height;
		img.width = ratio*img.height;
		img.src = Memes.data.memes[index].url;
	}
}

async function apicall(){
	const request_url = "https://api.imgflip.com/get_memes";
	const response = await fetch(request_url, { method : 'GET'})
        .then(res => res.text()) 
		.then(json => JSON.parse(json))
	return response;
}