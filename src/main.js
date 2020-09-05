const express = require("express");
const path = require('path');

const app = express();

// Middleware 
app.use("/src", express.static("src"));
// navigation routes 
// index page 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
// contact page
 app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./contact.html"));
 });
// catch 404 and forward error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./404.html"));
});
// server
app.listen(3000, function(){
    // create variable to hold date 
    var d = new Date;
    console.log('Server is running on port 3000 on', d.toString());
})