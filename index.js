const express = require("express");
const fs = require("fs");
const path = require("path");
const moment = require("moment");

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
  var reqDate = req.params.datestr;
  var resDate;
  var response = {
    unix: {},
    natural: {}
  };

  if ( /%20/.test(reqDate) ) {
    // Request is formatted in natural language
    response.unix = moment(reqDate, "X");
    response.natural = reqDate;
  } else {
    // Request contains a Unix timestamp
    response.unix = reqDate;
    response.natural = moment(reqDate, "MMMM D, YYYY");
  }
  
  res.json(response);
});
  

app.listen(port, function () {
  console.log("Listening on port: " + port);
});