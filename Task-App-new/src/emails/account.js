
const mailgun = require("mailgun-js");
 
const sendWelcomeEmail = (email, name) => {
    const DOMAIN = 'sandbox0f70dd23b7d04e30990c0a383f0455eb.mailgun.org'; // Your Mailgun domain
    const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

    mg.messages().send({
        to: email,
        from: "nishapareek90460@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }, (error, body) => {
        if (error) {
            console.error('Error sending welcome email:', error);
        } else {
            console.log('Welcome email sent successfully:', body);
        }
    });
}; 

const cancelEmail = (email, name) => {
    const DOMAIN = 'sandbox0f70dd23b7d04e30990c0a383f0455eb.mailgun.org'; // Your Mailgun domain
    const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

    mg.messages().send({
        to: email,
        from: "nishapareek90460@gmail.com",
        subject: "leaving so early?!!",
        text: `Good byee, ${name}. is there something we can do to keep you on board!.`
    }, (error, body) => {
        if (error) {
            console.error('Error sending cancel email:', error);
        } else {
            console.log('cancel email sent successfully:', body);
        }
    });
}; 
module.exports = {
    sendWelcomeEmail, cancelEmail
};





