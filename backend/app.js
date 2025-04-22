// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
require('./db');

app.use(cors());
app.use(express.json());

// ✅ This must point to a proper router module
app.use('/api/network', require('./routes/network'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));


module.exports = app;
