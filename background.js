chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
	let msg = {
		txt: 'Meme Game On'
	}
	chrome.tabs.sendMessage(tab.id, msg);
}