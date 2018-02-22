//console.log(window.$markoWidgetsConfig);
let markoWidgetsConfig = false;
let applyStyles = false;
let componentNode = null;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.marko) {
       if(request.markoWidgets){
       	  markoWidgetsConfig = true;
       }
      chrome.pageAction.show(sender.tab.id);
      console.log("Built with marko"+sender.tab.url);
    }
  });

chrome.pageAction.onClicked.addListener(function(tab) {
	console.log(applyStyles);
  chrome.tabs.executeScript(tab.id, {
    code: 'var applyStyle = ' + !applyStyles
    }, function() {
    chrome.tabs.executeScript(tab.id, {file: 'js/highlightcomponents.js'});
});

});

