const nodemailer = require('nodemailer');
 
class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
 
  sendEmail(targetEmail, contentt) {
    const message = {
      from: 'Notes Apps',
      to: targetEmail,
      subject: 'Ekspor Catatan',
      text: 'Terlampir hasil dari ekspor catatan',
      attachments: [
        {
          filename: 'notes.json',
          content: contentt
        },
      ],
    };
 
    return this._transporter.sendMail(message);
  }
}
 
module.exports = MailSender;