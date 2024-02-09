window.addEventListener('message', function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == 'CLOSE_TAB')) {
    // Send a message to the extension
    chrome.runtime.sendMessage({message: 'exit_fullscreen'});
  }
}, false);

