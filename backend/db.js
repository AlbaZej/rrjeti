const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://albanazej:London12345@rrjeti.dllf4za.mongodb.net/'
).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
