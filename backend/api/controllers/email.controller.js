const nodemailer = require("nodemailer");

const htmlContent = `
  <h1>Mi Correo con HTML</h1>
  <p>Este es un correo con contenido HTML enviado desde Nodemailer.</p>
  <p>Puedes agregar cualquier contenido HTML aquí.</p>
`;

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.SCHEDULEPRO,
    pass: process.env.SCHEDULEPROPASS,
  },
});

const stringlarge = (data) => {
  data.sort((a, b) => new Date(a.Day) - new Date(b.Day));


  const resultString = data.reduce((acc, obj) => {
    const dateString = new Date(obj.Day).toISOString().slice(0, 10);
    const entryString = `<tr><td>${dateString}</td><td>${obj.Shift}</td><td>${obj.Name}</td></tr>`;
    return acc + entryString;
  }, "");

  return resultString;
};

const sendShift = async (req, res) => {
  const { emails, sh: shifts } = req.body;

  const texto = stringlarge(req.body.sh);

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

  try {
    const info = await transporter.sendMail({
      from: `"SchedulePRO" <${process.env.SCHEDULEPRO}>`,
      to: req.body.emails,
      subject: "📨 New Shift",
      text: '',
      html: htmlToSend,
    });

    res.json("Msg sent");
  } catch (error) {
    console.error(">> Error sending email ", error);
  }
};

module.exports = { sendShift };
