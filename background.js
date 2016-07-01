var w_top = 0, 
    w_left = 0;

chrome.windows.onFocusChanged.addListener(function(w){
    if(w > 0) { //Checks window id to be valid
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
                    if (response) {
                        w_top = response.top;
                        w_left = response.left;
                    }
                });
            }
        });
    }
});

chrome.windows.onCreated.addListener(function(new_window) {
    chrome.windows.update(new_window.id, {left: w_left, top: w_top});
});
