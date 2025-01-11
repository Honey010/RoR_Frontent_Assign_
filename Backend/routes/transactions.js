const express = require('express');
const {
    listTransactions,
    getStatistics,
    getBarChart,
    getPieChart,
    getCombinedData
} = require('../controllers/transactionController');

const router = express.Router();
router.get('/list', listTransactions);
router.get('/statistics', getStatistics);
router.get('/barchart', getBarChart);
router.get('/piechart', getPieChart);
router.get('/combined', getCombinedData);

module.exports = router;
