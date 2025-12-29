require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes');
// const path = require('path');
// const fs = require('fs');
const app = express();
app.use(express.json());

// CORS for your mobile app (simple)
const cors = require('cors');
app.use(cors());


// routes
app.use('/api/foods', foodRoutes);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Food Ordering API' });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI missing in .env');
  process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo connected');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch(err => {
    console.error('Failed to connect to Mongo', err);
    process.exit(1);
  });
