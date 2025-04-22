const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'Email and password required.' });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: 'Invalid email or password.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid email or password.' });

    const token = jwt.sign({ id: user._id }, 'rrjetiSecretKey', { expiresIn: '2h' });

    // ✅ Make sure this is the ONLY response
    return res.json({
      message: 'Login successful',
      token,
      role: user.role // ✅ This line sends the role back
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login.' });
  }
};
