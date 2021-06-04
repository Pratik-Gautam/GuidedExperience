document.body.style.border = "5px solid green";

var css_reference = document.createElement('link');
css_reference.setAttribute('rel','stylesheet');
css_reference.setAttribute('href','<Blob storage url>/guidedexperienceresources/BootstrapTour/css/bootstrap-tour-standalone.min.css');
(document.head||document.documentElement).appendChild(css_reference);


var jquery_reference = document.createElement('script');
jquery_reference.setAttribute('src','<Blob storage url>/guidedexperienceresources/Scripts/jquery-3.4.1.min.js');
jquery_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(jquery_reference);

var bootstrapTour_reference = document.createElement('script');
bootstrapTour_reference.setAttribute('src','<Blob storage url>/guidedexperienceresources/BootstrapTour/js/bootstrap-tour-standalone.min.js');
bootstrapTour_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(bootstrapTour_reference);

var app_reference = document.createElement('script');
app_reference.setAttribute('src','<Blob storage url>/guidedexperienceresources/BootstrapTour/app/app.js');
app_reference.setAttribute('type','text/javascript');
(document.head||document.documentElement).appendChild(app_reference);
//script.remove();
