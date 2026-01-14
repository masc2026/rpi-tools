const nodemailer = require('nodemailer');

// SMTP-Transporter erstellen
const transporter = nodemailer.createTransport({
  host: 'mail.simas.local',
  port: 465, // Für SSL normalerweise Port 465; für STARTTLS 587
  secure: true, // true für 465, false für andere Ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmail(from, subject, text) {
  console.log(`sendEmail in mailer`);
  try {
    let info = await transporter.sendMail({
      from: from, // Absenderadresse
      to: process.env.EMAIL_USER, // Liste der Empfänger
      subject: subject, // Betreffzeile
      text: text, // Plaintext-Körper
      html: `<b>${text}</b>` // HTML-Körper
    });
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmail };
