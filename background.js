chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getUrls") {
        chrome.tabs.executeScript({
            code: `
        Array.from(document.links).map(link => link.href);
      `
        }, function(result) {
            sendResponse({ urls: result[0] });
        });
        return true;  // Will respond asynchronously.
    }
});
