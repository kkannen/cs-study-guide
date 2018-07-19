require("dotenv").config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(require("./routes/SICPLessonRoutes"))
app.use(require("./routes/UserRoutes"));
app.use(require("./routes/SessionRoutes"));
//app.use(require("./routes/AuthenticationRoutes"));
app.use(require("./routes/SICPLessonRoutes"))
app.use(require("./routes/AddedClassRoutes"))


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongodburi)
.then(() => {
  console.log('\x1b[36m%s\x1b[0m', "mongoose connected successfully");
},
err => {
  console.log('\x1b[31m%s\x1b[0m', "mongoose did not connect",err);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});