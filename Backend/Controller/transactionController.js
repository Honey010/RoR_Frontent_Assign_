const Transaction = require('../models/Transaction');

const listTransactions = async (req, res) => {
    const { page = 1, perPage = 10, search = '', month } = req.query;
    const regex = new RegExp(search, 'i');
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

    const query = {
        dateOfSale: { $gte: startDate, $lt: endDate },
        $or: [{ title: regex }, { description: regex }, { price: { $regex: regex } }]
    };

    const total = await Transaction.countDocuments(query);
    const transactions = await Transaction.find(query)
        .skip((page - 1) * perPage)
        .limit(Number(perPage));

    res.json({ total, transactions });
};

const getStatistics = async (req, res) => {
    const { month } = req.query;
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

    const transactions = await Transaction.find({ dateOfSale: { $gte: startDate, $lt: endDate } });
    const totalSales = transactions.filter((t) => t.sold).reduce((acc, t) => acc + t.price, 0);
    const totalSold = transactions.filter((t) => t.sold).length;
    const totalNotSold = transactions.length - totalSold;

    res.json({ totalSales, totalSold, totalNotSold });
};

const getBarChart = async (req, res) => {
    const { month } = req.query;
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

    const transactions = await Transaction.find({ dateOfSale: { $gte: startDate, $lt: endDate } });
    const ranges = Array(10).fill(0);
    const thresholds = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    transactions.forEach(({ price }) => {
        const index = thresholds.findIndex((t) => price <= t);
        ranges[index >= 0 ? index : 9]++;
    });

    res.json(ranges);
};

const getPieChart = async (req, res) => {
    const { month } = req.query;
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

    const transactions = await Transaction.find({ dateOfSale: { $gte: startDate, $lt: endDate } });
    const categoryCount = {};

    transactions.forEach(({ category }) => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
    });

    res.json(categoryCount);
};

const getCombinedData = async (req, res) => {
    const statistics = await getStatistics(req);
    const barChart = await getBarChart(req);
    const pieChart = await getPieChart(req);

    res.json({ statistics, barChart, pieChart });
};

module.exports = { listTransactions, getStatistics, getBarChart, getPieChart, getCombinedData };
