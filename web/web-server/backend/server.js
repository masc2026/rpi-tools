require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const { sendEmail } = require('./mailer');

const app = express();

// CORS Middleware hinzufügen, um alle Origin zu erlauben
app.use(cors());

// Middleware, um JSON-Daten zu parsen
app.use(express.json());

// Handle SPA history mode
app.use(history());

app.use(express.static(path.join(__dirname, '.')));

// API-Route zum Senden von E-Mails
app.post('/api/send-mail', async (req, res) => {
    console.log(`API-Route zum Senden von E-Mails`);
    const { from, subject, body } = req.body;
    try {
        let info = await sendEmail(from, subject, body);
        res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000/`);
});