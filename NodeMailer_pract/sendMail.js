const nodemailer = require("nodemailer");
const sendMail = async (req,res) => {
    let testAccount = await nodemailer.createTestAccount();
     //connect with smtp  server
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "skylar.cormier17@ethereal.email",
          pass: "NcRxEf9Wn8a1MFF9e1",
        },
      });

      const info = await transporter.sendMail({
        from: '"Nisha" <nisha@gmail.com>', // sender address
        to: "nnp@gmail.com, baz@example.com", // list of receivers
        subject: "Hello Nisha", // Subject line
        text: "learning nodejs", // plain text body
        html: "<b>Hello from html side</b>", // html body
      });
      console.log("message sent: %s", info.messageId)
    res.json(info)
}
module.exports = sendMail;

