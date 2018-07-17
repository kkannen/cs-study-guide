const express = require("express");
const router = express.Router();
let {read, create} = require("../controllers/AddedClassController");

router.get("/addedClasses", read);
router.post("/addedClasses", create)

module.exports = router;