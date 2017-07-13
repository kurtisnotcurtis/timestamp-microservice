const express = require("express");

var app = express();

app.get("/", function (req, res) {
  var params = req.params;
  if (query) {
    if () {
        
    } else {
      res.send();    
    }
  }
  res.send( JSON.stringify(query) );
});

app.listen(process.env.PORT);