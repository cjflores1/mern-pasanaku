const express = require("express");
const pasanakuController = require("../../controllers/pasanakuController");
const router = express.Router();

router.get("/", pasanakuController.getAllPasanakus);

router.get("/:pasanakuYear", pasanakuController.getOnePasanakuByYear);

router.get("/id/:pasanakuId", pasanakuController.getOnePasanakuById);

router.post("/", pasanakuController.createNewPasanaku);

router.patch("/:pasanakuId", pasanakuController.updateOnePasanaku);

router.patch("/:pasanakuId/getNumber", pasanakuController.getNumber);

router.delete("/:pasanakuId", pasanakuController.deleteOnePasanaku);

module.exports = router;
