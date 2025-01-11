const axios = require('axios');
const Transaction = require('../models/Transaction');

const seedDatabase = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Transaction.deleteMany();
        await Transaction.insertMany(response.data);
        res.status(200).json({ message: 'Database seeded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding database', error });
    }
};

module.exports = { seedDatabase };
