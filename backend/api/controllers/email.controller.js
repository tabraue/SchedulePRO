const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.SCHEDULEPRO,
      pass: process.env.SCHEDULEPROPASS
    }
});

const sendShift = async (req, res) => {
    console.log(req.body)

    try {
        const info = await transporter.sendMail({
            from: `"SchedulePRO" <${process.env.SCHEDULEPRO}>`,
            to: req.body.employee,
            subject: "📨 New Shift",
            text: req.body.employee,
            html: req.body.schedule
        })
        res.json('Msg sent')
    } catch (error) {
        console.error('>> Error sending email ', error)
    }
}


module.exports = { sendShift }