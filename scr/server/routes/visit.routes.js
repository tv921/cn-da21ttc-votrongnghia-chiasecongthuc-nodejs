const express = require('express');
const router = express.Router();
const { recordVisit, getStatistics } = require('../controllers/visit.controller');


router.post('/record', recordVisit);


router.get('/stats', getStatistics);

module.exports = router;
