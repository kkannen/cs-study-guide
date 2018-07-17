const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    "title": {
        type: String
    },
    "reading": {
        type: Object
    },
    "playlist": {
        type: String
    },
});

module.exports = mongoose.model("AddedClass", schema)