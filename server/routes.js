const express = require('express');
const userController = require('./controllers/userController');
const router = express.Router();

// // get request to get recipeients 

// checks user on login attempt
// same story as above, tested on postman, not yet functional with frontend
router.post('/login', userController.checkUsers);


module.exports = router;
