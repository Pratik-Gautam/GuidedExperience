var template="";
template += "<div id=\"theroom-info\">";
template += "  <span id=\"highlight\">Please hover on the element that you want to add to the guided experience and click to add it!<\/span><br>";
template += "  <button class=\"exclusion\" id=\"btnGenerateFile\" type=\"button\" onclick=\"alert('Hi');\">Generate File</button>";
template += "  <button class=\"exclusion\" id=\"btnClearSelection\" type=\"button\" onclick=\"alert('Hi');\">Clear Selection</button>";
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

// initialize
theRoom.start(options);
