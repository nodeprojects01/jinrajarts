const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
// const {getVisitorCount,
//   setVisitorCount} = require('../src/VisitorCount/VisitorCount')
dotenv.config();
const app = express();
let counter = 0
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
const storage = require('node-persist');

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: req.body.message // plain text body
    };
   

    transporter.sendMail(mailOptions, function(err, info) {
        console.log(mailOptions)
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});


app.get("/visit", (req, res) => {
  counter++;
  storage.setItem("counter", counter).then(() => {
   res.json(counter);
  });
});

storage.init({
  dir:'VisitorCount'}).then(() => storage.getItem("counter")).then((value) => {
  if (value > 0) {
      counter = value;
  } else {
      counter = 0;
  }
});
app.listen(3030, () => {
  console.log('server start on port 3030');
});