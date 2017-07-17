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
    unix: null,
    natural: null
  };
  var natural = /\w+\s\d{1,2}\,*\s\d{4}/;
  var unix = /^\d{10}$/;
  
  if ( natural.test(reqDate) ) {
    // Request is formatted in natural language
    response.unix = moment(reqDate, "x");
    response.natural = reqDate;
  } else if ( unix.test(reqDate) ) {
    // Request contains a Unix timestamp
    response.unix = reqDate;
    response.natural = moment(reqDate, "MMMM D, YYYY");
  }
  
  res.json(response);
});
  

app.listen(port, function () {
  console.log("Listening on port: " + port);
});