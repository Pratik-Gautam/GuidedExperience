document.body.style.border = "5px solid pink";


var jquery_reference = document.createElement('script');
jquery_reference.setAttribute('src','https://prgautteststorage.blob.core.windows.net/guidedexperienceresources/Scripts/jquery-3.4.1.min.js');
jquery_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(jquery_reference);

var theRoom_reference = document.createElement('script');
theRoom_reference.setAttribute('src','https://prgautteststorage.blob.core.windows.net/guidedexperienceresources/TheRoom-Final.js');
theRoom_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(theRoom_reference);

var adminApp_reference = document.createElement('script');
adminApp_reference.setAttribute('src','https://prgautteststorage.blob.core.windows.net/guidedexperienceresources/Adminapp.js');
adminApp_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(adminApp_reference);
//script.remove();
