chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.url.startsWith('https://rootamin.github.io/')) {
    chrome.windows.update(tab.windowId, {state: 'fullscreen'});
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message == 'exit_fullscreen') {
    chrome.windows.getCurrent({}, function(window) {
      chrome.windows.update(window.id, {state: 'normal'});
    });
  }
});

