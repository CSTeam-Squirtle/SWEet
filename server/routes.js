const express = require('express');
const userController = require('./controllers/userController');

const router = express.Router();

// get request to get recipeients 
router.get('/contacts', userController.getRecipients, (req, res) =>
  res.status(200).json([...res.locals.recipients])
);

// create new user when they signup on the main page
// NOTE I believe this route has been tested in postman but does not
// yet work with the frontend
router.post('/create', userController.newUser, (req, res) =>
  res.status(200).json(res.locals.user)
);

// checks user on login attempt
// same story as above, tested on postman, not yet functional with frontend
router.post('/login', userController.checkUsers);

router.get('/profile', userController.profile);

module.exports = router;
