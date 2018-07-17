let SICPLesson = require("../models/SICPLessonModel");
let listOfLessons = require("../SICPLessons")


module.exports.read = (request, response) => {
    SICPLesson.find({}).exec()
    .then(sicplessons => response.send(sicplessons.sort()))
};


module.exports.create =  function create(request, response) {
    console.log(listOfLessons)
    listOfLessons.map((lesson, index) => {
        const newSICPLesson = new SICPLesson({
            "lessonNumber": index+1,
            "title": lesson["title"] ,
            "reading": lesson["reading"], 
            "playlist": lesson["playlist"],
        });
        newSICPLesson.save()
        .then(savedSICPLesson => response.json(savedSICPLesson))
    })
};