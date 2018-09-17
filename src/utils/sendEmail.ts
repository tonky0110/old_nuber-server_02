import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: "sandboxb09b86b031fa4bd5919993aef3936ee5.mailgun.org"
});