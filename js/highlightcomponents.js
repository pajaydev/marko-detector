console.log("inside show component");
console.log(selector);
selector = selector + '[id]';
console.log(selector);
if(applyStyle){
outlinesStyleNode = document.createElement('style');
outlinesStyleNode.textContent = selector + ' {outline: solid 1px rgb(186, 78, 114);}';
document.head.appendChild(outlinesStyleNode);
}else{
outlinesStyleNode.remove();
outlinesStyleNode = null;
}
