var template="";
template += "<div id=\"theroom-info\">";
template += "  <span id=\"theroom-tag\"><\/span>";
template += "  <span id=\"theroom-id\"><\/span>";
template += "  <span id=\"theroom-class\"><\/span>";
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
template += "  #theroom-tag {";
template += "    color: #C2185B;";
template += "  }";
template += "";
template += "  #theroom-id {";
template += "    color: #5D4037;";
template += "  }";
template += "";
template += "  #theroom-class {";
template += "    color: #607D8B;";
template += "  }";
template += "<\/style>";

var options = {
  template: template,
  showInfo: false
};

// initialize
theRoom.start(options);
