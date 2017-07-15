const express = require("express");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
var app = express();

app.get("/", function (req, res) { // Serve index page
  var fileName = path.join(__dirname, "views", "index.html");
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log("View sent:", fileName);
    }
  })
});
  
app.get("/:datestr", function (req, res) { // Handle passed param string
  var params = req.params;
    
  var date;

  if ( /%20/.test(params) ) {
    // Request is formatted in natural language
    response = {
      unix: new Date(),
      natural: req.params
    };
  } else {
    // Request contains a Unix timestamp
    response = {
      unix: req.params,
      natural: new Date()
    };
  }
  res.send( JSON.stringify(params) );
});
  

app.listen(port, function () {
  console.log("Listening on port: " + port);
});