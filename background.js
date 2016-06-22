chrome.windows.onCreated.addListener(function(w) {
	chrome.windows.update(w.id, {left:0, top:0});
});
