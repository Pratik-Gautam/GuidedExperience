var myClickHandler = function (element) { console.log('Clicked element:', element); }
var myDomOutline = DomOutline({ onClick: myClickHandler, filter: '.debug' });
myDomOutline.start();
myDomOutline.stop();
