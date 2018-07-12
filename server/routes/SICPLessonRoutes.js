const express = require("express");
const router = express.Router();
let {read} = require("../controllers/SICPLessonController");

router.get("/sicplessons", read);
//router.put("/sicplessons/:id", update)
// router.post("/sicplessons", create);

module.exports = router;