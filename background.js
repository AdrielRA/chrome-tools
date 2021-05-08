chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.type == "run") {
    var port = chrome.runtime.connectNative("com.ara.caller");
    port.postMessage(request.value);
    port.onMessage.addListener((message) => {
      console.log("msg: ", message);
    });
    port.onDisconnect.addListener((_) => {
      console.log("last error:" + chrome.runtime.lastError.message);
    });
  }
});
