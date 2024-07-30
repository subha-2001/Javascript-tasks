const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<h1 style='text-align:center;color:blue;'>Welcome to my Home Page</h1>`);
});

app.post('/api/sendEmail', (req, res) => {
    let data = req.body;
    console.log(data);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ssrb2001@gmail.com',
            pass: 'bucz thxf pvaa bhjc'  
        }
    });

    const mailOptions = {
       
        from: 'ssrb2001@gmail.com',
        to: 'subhashrir037@gmail.com',
        subject: 'Message from client',
        html: `
        <ul>
        <li><h1 style='color:black;'>Name: ${data.name}</h1></li>
        <li><h1 style='color:black;'>Phone Number: ${data.phonenumber}</h1></li>
        <li><h1 style='color:black;'>Email: ${data.email}</h1></li>
        <li><h1 style='color:black;'>Message: ${data.message}</h1></li>
        </ul>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).send('Email sent successfully');
        }
    });
    transporter.close();
});

app.listen(8000, () => {
    console.log('Server starting up on port 8000!');
});
