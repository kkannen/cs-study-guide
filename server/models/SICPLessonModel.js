const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    "lessonNumber": {
        type: Number
    },
    "title": {
        type: String
    },
    "reading": {
        type: Object
    },
    "playlist": {
        type: String
    }

});

module.exports = mongoose.model("SICPLesson", schema)