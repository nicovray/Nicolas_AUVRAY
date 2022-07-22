const express = require("express");

const { ProjetController, CategoryController } = require("./controllers/index");

const router = express.Router();

router.get("/projet", ProjetController.browse);
router.get("/projet/:id", ProjetController.read);
router.put("/projet/:id", ProjetController.edit);
router.post("/projet", ProjetController.add);
router.delete("/projet/:id", ProjetController.delete);

router.get("/categories", CategoryController.browse);

module.exports = router;
