const express = require('express');
const router = express.Router();
const { getAllCards, getCardById, updateCard, deleteCardById, addCard } = require('../controllers/Card_control');

module.exports = router;

router.get('/', getAllCards);

router.get("/:id", getCardById)

// Route POST pour ajouter une nouvelle carte
router.post('/', addCard);

router.put("/:id", updateCard);

router.delete("/:id", deleteCardById)