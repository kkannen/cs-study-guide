
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://kkannen:learncs1@ds259250.mlab.com:59250/learn-cs");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(require("./routes/SICPLessonRoutes"))

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});