//console.log(window.$markoWidgetsConfig);
let markoWidgetsConfig = false;
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
  chrome.tabs.executeScript(tab.id, {
    code: 'var markoConfig = ' + markoWidgetsConfig
    }, function() {
    chrome.tabs.executeScript(tab.id, {file: 'js/showcomponents.js'});
});

});

