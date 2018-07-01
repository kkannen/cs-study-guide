const express = require("express");
const router = express.Router();
let {list} = require("../controllers/SICPLessonController");

router.get("/sicplessons", list);

module.exports = router;