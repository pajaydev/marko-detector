var selector = '[data-marko-key], [data-marko]';

var element = document.querySelector(selector);

if(element || (markoWidgets != undefined && markoWidgets != null)){
   console.log("Marko detected");
    chrome.runtime.sendMessage({marko: true});
}
//console.log(elements);