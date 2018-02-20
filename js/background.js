console.log(window.$markoWidgetsConfig);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.marko) {
      chrome.pageAction.show(sender.tab.id);
      console.log("Built with marko"+sender.tab.url);
    }
  });

chrome.pageAction.onClicked.addListener(function(tab) {
	console.log("onclick listener");
  chrome.tabs.sendMessage(tab.id, {toggleOutlines: true});
  chrome.tabs.executeScript(tab.id, {file:"js/highlight.js"});
});

function registerDeclaration(){
	console.log("declaration");
}
if (chrome.extension.inIncognitoContext) {
  registerDeclaration();
} else {
  chrome.runtime.onInstalled.addListener(registerDeclaration);
}