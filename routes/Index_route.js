const express = require('express');
const cardRoute = require('./Card_route');



const router = express.Router();

module.exports = router;

router.use('/jobs', cardRoute);

