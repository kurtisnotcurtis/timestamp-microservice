const express = require("express");

var app = express();

app.get("/", function (req, res) {
  var params = req.params;
  if (params) {
    
    var response;
    
    if ( /%20/.test(params) ) {
      // Request is formatted in natural language
      response = {
        unix: ?,
        natural: req.params
      };
    } else {
      // Request contains a Unix timestamp
      response = {
        unix: req.params,
        natural: ?
      };
    }
    res.send( JSON.stringify(params) );
  }
});

app.listen(process.env.PORT);