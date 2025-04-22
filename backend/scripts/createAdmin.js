const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

mongoose.connect('mongodb+srv://albanazej:London12345@rrjeti.dllf4za.mongodb.net/');

async function createUser() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const user = new User({
    email: 'admin@rrjeti.com',
    password: hashedPassword,
  });

  await user.save();
  console.log('✅ Admin user created');
  mongoose.disconnect();
}

createUser();
