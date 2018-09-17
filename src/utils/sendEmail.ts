import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: "sandboxb09b86b031fa4bd5919993aef3936ee5.mailgun.org"
});

const sendEamil = (subject: string, html: string) => {
    const emailData = { 
        from: "tonky0110@gmail.com", 
        to: "tonky0110@gmail.com", 
        subject, 
        html 
    };

    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `Hello ${fullName}, please verify you email`;
    const emailBody = `Verify you email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
    return sendEamil(emailSubject, emailBody);
}