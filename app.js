//jshint esversion:6


const express = require("express");
const bodyParser = require("body-Parser");

const app = express();

app.use("view engine", "ejs");

app.get("/", function(req, res){
  var today = new Date();

  if (today.getDay() === 6) {
    res.send("Testing app.js");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
