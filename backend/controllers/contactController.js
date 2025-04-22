const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, company, email, message } = req.body;

    if (!name || !company || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const submission = new Contact({
      name,
      company,
      email,
      message,
    });

    await submission.save();

    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Server error submitting contact form.' });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error('Fetch contacts error:', err);
    res.status(500).json({ error: 'Failed to fetch contact requests.' });
  }
};
