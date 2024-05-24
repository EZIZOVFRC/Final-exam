
const express = require("express")
const { examController } = require("../controllers/exam.controller")
const router = express.Router()

router.get("/", examController.getAll)
router.get("/:id", examController.getById)
router.post("/", examController.add)
router.delete("/:id", examController.delete)
router.put("/:id", examController.edit)

module.exports = router 
