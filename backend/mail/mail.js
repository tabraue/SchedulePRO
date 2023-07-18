const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.SCHEDULEPRO,
      pass: process.env.SCHEDULEPROPASS
    }
});

const mail = async (employee, random) => {

  const htmlToSend = `
    <!DOCTYPE html>
    <html>
    <head>
      <title style="color:">SchedulePRO</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          font-size: 18px;
          color: #357b8d;
        }
      
        h1, h3, p, a{
          text-align: center;
          margin-bottom: 20px;
          color: #357b8d;
        }

      </style>
    </head>
    <body>
      <h1>Schedule by SchedulePRO</h1>
      <div>  
        <h3>Hi ${employee.name}</h3>
        <p>You have been registered at SchedulePRO©</p>
        <p>Your details</p>
      </div>
      <div>
        <p>Email: ${employee.email}</p>
        <p>Temporary password: ${random} 
          <span style="color:red;">Please change it as soon as possible.</span>
          <a href="http://localhost:5173/login" style="background: #f2a154;">Log in now</a>
        </p>
      </div>
         
    </body>
    </html>`;

    try {
        const info = await transporter.sendMail({
        from: `"SchedulePRO" <${process.env.SCHEDULEPRO}>`, // sender address
        to: `${employee.email}`, // list of receivers
        subject: "Welcome to SchedulePRO", // Subject line
        text: `Hi ${employee.name}`, // plain text body
        html: htmlToSend, // html body
    });
    
        console.log("Message sent");
    } catch (error) {
        console.error('>> Error sending email ', error)
    }
    //, info.messageId
}




module.exports = {mail}