const express = require('express');

const mongoose = require('mongoose');

// form validator
const { body, validationResult } = require('express-validator/check');

const router = express.Router();

const Registration = mongoose.model('Registration');


//to use html in views file using ejs
exports.index = function(req, res){
res.render('index', { title: 'ejs' });};

router.get('/registrations', (req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render('registrations', { title: 'Busy Level', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

router.get('/form', (req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render('form', { title: 'Form', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});



//getting data
router.get('/', (req, res) => {
  Registration.findOne(function(err, bus){
    var name = bus;
    res.render('map', name);
    var busy = bus;
    res.render('map', busy);
    res.render('map', {title: 'Map'});
    console.log("found: " + bus);
  });
});

//posting data with validation of minimum size
// for other validations go to https://github.com/express-validator/express-validator
router.post('/',
  [
    body('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    body('busy')
      .isLength({ min: 1 })
      .withMessage('Please enter an number'),
  ],
  (req, res) => {
  console.log(req.body);
    const errors = validationResult(req);

    if (errors.isEmpty()) {
  const registration = new Registration(req.body);
  registration.save()
    .then(() => { res.render('map', {title: 'Map'}); })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
} else {
      res.render('map', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);

exports.index = function(req, res){
res.render('index', { title: 'ejs' });};


module.exports = router;

