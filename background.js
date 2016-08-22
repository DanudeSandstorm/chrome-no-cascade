chrome.windows.onCreated.addListener(function(w) {
    if (w.state == "normal" && w.type == "normal") {
        chrome.windows.update(w.id, {left: w.left - 10, top: w.top - 10});
    }
});
