const express = require('express');
const cardRoute = require('./Card_route');



const router = express.Router();

router.use('/api/jobs', cardRoute);

module.exports = router;
