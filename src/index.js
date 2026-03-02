require('dotenv').config();

const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data from requests
app.use(express.json());

// Serve our single-page frontend (which we will build next)
app.use(express.static('public'));

// Mount our API routes under the "/api" prefix
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Inventory Engine is running on http://localhost:${PORT}`);
});