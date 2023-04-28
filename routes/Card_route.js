const express = require('express');
const router = express.Router();
const { getAllCards, getCardById, updateCard, deleteCardById, addCard, searchOffersCard } = require('../controllers/Card_control');


router.get('/', getAllCards);

router.get("/search", searchOffersCard);

router.get("/:id", getCardById)


// Route POST pour ajouter une nouvelle carte
router.post('/create/', addCard);

router.put("/:id", updateCard);

router.delete("/:id", deleteCardById)



module.exports = router;