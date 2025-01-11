const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnect = require('./utils/dbConnect');

const seedRoutes = require('./routes/seed');
const transactionRoutes = require('./routes/transactions');

const app = express();
app.use(cors());
app.use(express.json());

dbConnect();

app.use('/api/seed', seedRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
