const routes = require('express').Router();
var request = require('request');
const mailer = require('express-mailer');

// routes.post('/contactus', function(req, res) {
//   app.mailer.send('email', {
//     to: 'aemgreenheck@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
//     subject: 'Test Email', // REQUIRED.
//     otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
//   },
//     function(e, r, data) {
//       res.send(JSON.stringify('yo'))
//     }
//   )
// })

module.exports = routes;

// app.get('/', function (req, res, next) {
//   app.mailer.send('email', {
//     to: 'example@example.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
//     subject: 'Test Email', // REQUIRED.
//     otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
//   }, function (err) {
//     if (err) {
//       // handle error
//       console.log(err);
//       res.send('There was an error sending the email');
//       return;
//     }
//     res.send('Email Sent');
//   });




//
// routes.post('/videos', function(req, res) {
//   request.get(
//     'https://www.googleapis.com/youtube/v3/search?' +
//     'key=' + process.env.YOUTUBE_API_KEY +
//     '&q=' + req.body.data +
//     '&type=video&chart=relavence&part=snippet,id&maxResults=20',
//     function(e, r, data) {
//       res.send(data)
//     })
// })
