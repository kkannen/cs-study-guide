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
    },
    "checked": {
        type: Boolean
    }

});

module.exports = mongoose.model("SICPLesson", schema)