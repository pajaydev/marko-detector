console.log(window.$_mod);


function registerDeclaration(){
	console.log("declaration");
}
if (chrome.extension.inIncognitoContext) {
  registerDeclaration();
} else {
  chrome.runtime.onInstalled.addListener(registerDeclaration);
}