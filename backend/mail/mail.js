const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.SCHEDULEPRO,
      pass: process.env.SCHEDULEPROPASS
    }
});

const mail = async (employee, random) => {
    try {
        const info = await transporter.sendMail({
        from: `"SchedulePRO" <${process.env.SCHEDULEPRO}>`, // sender address
        to: `${employee.email}`, // list of receivers
        subject: "Welcome to SchedulePRO", // Subject line
        text: `Hola ${employee.name}`, // plain text body
        html: `<b>Se ha creado tu cuenta con nosotros ${employee.email}, y su pass ${random} </b>`, // html body
    });
    
        console.log("Message sent");
    } catch (error) {
        console.error('>> Error sending email ', error)
    }
    //, info.messageId
}

module.exports = {mail}