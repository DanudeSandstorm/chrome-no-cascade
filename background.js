chrome.windows.onCreated.addListener(function(w) {
    chrome.windows.update(w.id, {left: w.left - 10, top: w.top - 10});
});
