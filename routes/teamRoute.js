const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");


router.get("/", teamController.getAllTaem);
router.get("/:id", teamController.getAllTeamById);
router.delete("/:id", teamController.deleteTeanmById);
router.post("/", teamController.addNewTeam);

module.exports = router;
