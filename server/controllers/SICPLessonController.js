let SICPLesson = require("../models/SICPLessonModel");

module.exports.list = function list(request, response) {
    SICPLesson.find({}).exec()
    .then(sicplessons => response.send(sicplessons))
};
