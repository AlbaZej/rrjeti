// backend/createUser.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

mongoose.connect('mongodb+srv://albanazej:London12345@rrjeti.dllf4za.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createUser() {
  try {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = new User({
      email: 'user@rrjeti.com',
      password: hashedPassword,
      role: 'user',
    });

    await user.save();
    console.log('✅ Normal user created successfully!');
  } catch (error) {
    console.error('❌ Error creating user:', error.message);
  } finally {
    mongoose.disconnect();
  }
}

createUser();
