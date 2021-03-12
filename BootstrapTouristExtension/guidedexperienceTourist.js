document.body.style.border = "5px solid green";

var css_reference = document.createElement('link');
css_reference.setAttribute('rel','stylesheet');
css_reference.setAttribute('href','https://prgautteststorage.blob.core.windows.net/guidedexperienceresources/bootstrap-tourist.css');
(document.head||document.documentElement).appendChild(css_reference);


var jquery_reference = document.createElement('script');
jquery_reference.setAttribute('src','https://prgautteststorage.blob.core.windows.net/guidedexperienceresources/Scripts/jquery-3.4.1.min.js');
jquery_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(jquery_reference);

var bootstrapTour_reference = document.createElement('script');
bootstrapTour_reference.setAttribute('src','https://prgautteststorage.blob.core.windows.net/guidedexperienceresources/bootstrap-tourist.js');
bootstrapTour_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(bootstrapTour_reference);

var app_reference = document.createElement('script');
app_reference.setAttribute('src','https://prgautteststorage.blob.core.windows.net/guidedexperienceresources/Touristapp.js');
app_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(app_reference);
//script.remove();
