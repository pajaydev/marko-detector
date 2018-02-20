let selector = '[data-marko-key], [data-marko]';
let marko_widgets = false;
let element = document.querySelector(selector);

if(element || (markoWidgets != undefined && markoWidgets != null)){
   console.log("Marko detected");
   if(typeof markoWidgets !== 'undefined'){
   	  marko_widgets = true;
   }
    chrome.runtime.sendMessage({marko: true, markoWidgets: marko_widgets});
}
//console.log(elements);