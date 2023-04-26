const express = require('express');
const router = express.Router();
const { getAllCards, getCardById, updateCard, deleteCardById, addCard, searchOffersCard } = require('../controllers/Card_control');


router.get('/', getAllCards);

router.get("/:id", getCardById)

// Route POST pour ajouter une nouvelle carte
router.post('/', addCard);

router.put("/:id", updateCard);

router.delete("/:id", deleteCardById)

router.get("/search", searchOffersCard);

module.exports = router;