const nodemailer = require('nodemailer')



const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.SCHEDULEPRO,
      pass: process.env.SCHEDULEPROPASS
    }
});

const htmlToSend = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Schedule by SchedulePRO</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
    
        table {
          border-collapse: collapse;
          width: 100%;
        }
    
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }
    
        th {
          background-color: #357b8d;
        }
    
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
    
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <h1>Schedule by SchedulePRO</h1>
      <table>
        <tr>
          <th>Day</th>
          <th>Shift</th>
          <th>Name</th>
        </tr>
        ${texto}
      </table>
    </body>
    </html>`;

const mail = async (employee, random) => {
    try {
        const info = await transporter.sendMail({
        from: `"SchedulePRO" <${process.env.SCHEDULEPRO}>`, // sender address
        to: `${employee.email}`, // list of receivers
        subject: "Welcome to SchedulePRO", // Subject line
        text: `Hi ${employee.name}`, // plain text body
        html: `<b> Hi ${employee.name} your details to login ${employee.email}, y su con ${random} </b>`, // html body
    });
    
        console.log("Message sent");
    } catch (error) {
        console.error('>> Error sending email ', error)
    }
    //, info.messageId
}




module.exports = {mail}