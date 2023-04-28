const Card = require('../models/Card_model');

const getAllCards = async (req, res) => {
	try {
		const card = await Card.find({}).maxTimeMS(10000);
		res.status(200).json(card);

	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

const getCardById = async (req, res) => {
	try {
		const card = await Card.findById(req.params.id);
		if (card) {
			res.status(200).json(card);
		} else {
			res.status(404).json({ message: "card not found" });
		}
	} catch (error) {
		res.status(504).json({ message: error.message });
	}
};



const addCard = async (req, res) => {
	try {
		const { company, logo, logoBackground, position, postedAt, contract, location, website, apply, description, requirements, role } = req.body;

		// Création de la nouvelle carte
		const newCard = new Card({
			company,
			position,
			postedAt,
			contract,
			location,
			website,
			apply,
			description,
			requirements,
			role,
		});

		// Enregistrement de la nouvelle carte dans la base de données
		await newCard.save();

		res.status(201).json({ success: true, data: newCard });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Server Error' });
	}
};

const updateCard = async (req, res) => {
	try {
		const cardId = req.params.id;
		const { company, logo, logoBackground, position, postedAt, contract, location, website, apply, description, requirements, role } = req.body;

		const updatedCard = await Card.findByIdAndUpdate(cardId, {
			company,
			logo,
			logoBackground,
			position,
			postedAt,
			contract,
			location,
			website,
			apply,
			description,
			requirements,
			role
		}, { new: true });

		if (!updatedCard) {
			return res.status(404).json({ success: false, error: 'Card not found' });
		}

		res.status(200).json({ success: true, data: updatedCard });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Server Error' });
	}
};


const deleteCardById = async (req, res) => {
	try {
		const card = await Card.findById(req.params.id);
		if (card) {
			await card.remove();
			res.json({ message: "card deleted" });
		} else {
			res.status(404).json({ message: "card not found" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const searchOffersCard = async (req, res) => {
	const { position, contract, location } = req.query;
	console.log(position, contract, location);
	try {
		const query = {};
		if (position) query.position = { $regex: position, $options: 'i' };
		if (contract) query.contract = contract === 'full-time' ? true : false;
		if (location) query.location = { $regex: location, $options: 'i' };
		console.log(query);
		const jobOffers = await Card.find(query);
		console.log(jobOffers);
		res.json(jobOffers);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

module.exports = {
	getAllCards,
	getCardById,
	deleteCardById,
	addCard,
	updateCard,
	searchOffersCard,
};
