chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var left = window.screenLeft;
        var top = window.screenTop;
        sendResponse({top: top, left: left});
    }
);
