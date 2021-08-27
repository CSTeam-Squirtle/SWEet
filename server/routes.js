const express = require('express');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const router = express.Router();

// get request to get recipeients 
router.get('/contacts', userController.getRecipients, (req, res) =>
  res.status(200).json([...res.locals.recipients])
);

// create new user when they signup on the main page
// NOTE I believe this route has been tested in postman but does not
// yet work with the frontend
router.post('/create', userController.newUser, (req, res) =>
  res.status(200).json(res.locals.new)
);

// checks user on login attempt
// same story as above, tested on postman, not yet functional with frontend
router.post('/login', userController.checkUser, (req, res) => {
  return res.status(200).json(...res.locals.user)
});

router.put('/profile', userController.profile, (req, res) => {
  res.status(200).json({});
});


router.post('/newAccount', userController.newUser, (req, res)=>{
  res.status(200).json({});
})

module.exports = router;
