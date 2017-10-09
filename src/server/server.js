const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
// const app = express();
const routes = require('./routes');
var app = require('express')(),
    mailer = require('express-mailer');
require('dotenv').config();

mailer.extend(app, {
  from: 'willzecken@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'willzecken@gmail.com',
    pass: 'ZMxn1029'
  }
});


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(routes);

app.get('/contactus', function(req, res) {
  app.mailer.send('email', {
    to: 'aemgreenheck@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject: 'Test Email', // REQUIRED.
    otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  },
    function(e, r, data) {
      res.send(JSON.stringify('yo'))
    }
  )
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
