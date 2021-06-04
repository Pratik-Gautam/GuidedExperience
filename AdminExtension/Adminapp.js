var template="";
template += "<div id=\"theroom-info\">";
template += "  <span id=\"highlight\">Please hover on the element that you want to add to the guided experience and click to add it!<\/span><br>";
template += "  <button class=\"exclusion\" id=\"btnGenerateFile\" type=\"button\" onclick=\"CallProcessorApi();\">Generate File</button>";
template += "  <button class=\"exclusion\" id=\"btnClearSelection\" type=\"button\" onclick=\"ClearArray();\">Clear Selection</button>";
template += "<\/div>";
template += "";
template += "<style>";
template += "  #theroom-info {";
template += "    position: fixed;";
template += "    bottom: 0;";
template += "    width: 100%;";
template += "    left: 0;";
template += "    font-family: \"Courier\";";
template += "    background-color: #333;";
template += "    padding: 10px;";
template += "    color: #fafafa;";
template += "    text-align: center;";
template += "    box-shadow: 0px 4px 20px rgba(0,0,0,0.3);";
template += "  }";
template += "";
template += "  #highlight {";
template += "    color: #FFFF00;";
template += "  }";
template += "  #btnGenerateFile {";
template += "    background-color: #4CAF50;";
template += "    pointer-events: auto;";
template += "  }";
template += "  #btnClearSelection {";
template += "    background-color: #4CAF50;";
template += "    pointer-events: auto;";
template += "  }";
template += "<\/style>";

var options = {
  template: template,
  showInfo: true
};

var ClearArray=function(){
  selectedSteps=[];
  alert('selection cleared!');
} 

const serviceUrl="<web api url>/api/GuideFileGen";

var CallProcessorApi=function(){
  var xhr=new XMLHttpRequest();
  xhr.open("POST",serviceUrl);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        alert('request successful!');
    }
}

xhr.send(JSON.stringify(selectedSteps));
}

// initialize
theRoom.start(options);
