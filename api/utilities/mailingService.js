const nodemailer = require("nodemailer");

const serviceMail = 'testMail@gmail.com';

export const sendMail = (user, code) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: serviceMail,
          pass: 'ehbfierhb'
        }
    });

    const options = {
        from: serviceMail,
        to: user.email,
        subject: `Verification code for user ${user.username}`,
        text: `Code: ${code}`
    };
    try {
        transport.sendMail(options);
    } catch(Error) {
        throw new Error("mail could not be sent");
    }
}