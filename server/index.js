//require("dotenv").config({path: "/Users/kristakannen/Documents/ACA/cs-study-guide/.env"})
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const sessionRoutes = require("./routes/SessionRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(require("./routes/SICPLessonRoutes"))
app.use(userRoutes);
app.use(sessionRoutes);
app.use(authenticationRoutes);


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
const promise = mongoose.connect("mongodb://kkannen:learncs1@ds259250.mlab.com:59250/learn-cs")
.then(() => {
  console.log('\x1b[36m%s\x1b[0m', "mongoose connected successfully");
},
err => {
  console.log('\x1b[31m%s\x1b[0m', "mongoose did not connect",err);
});

app.get("/publicinformation", (request, response) => {
  response.send("\x1b[32m%s\x1b[0m", "anyone can see this");
});

app.get("canigetthis", (request, response) => {
  response.send("\x1b[32m%s\x1b[0m", "You got the data. You are authenticated");
});

app.get("/secret", (request, response) => {
  response.send(`the current user is ${request.user.username}`);
});

const port = /*process.env.PORT ||*/ 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});