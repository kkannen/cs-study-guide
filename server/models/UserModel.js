const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  sicpProgress: {
    type: Object
  },

  algorithmsProgress: {
    type: Object
  },

  computerArchitectureProgress: {
    type: Object
  },

  computerNetworkingProgress: {
    type: Object
  },

  databasesProgress: {
    type: Object
  },

  languagesAndCompilersProgress: {
    type: Object
  },

  mathForCSProgress: {
    type: Object
  }
});

module.exports = mongoose.model("User", userSchema);
