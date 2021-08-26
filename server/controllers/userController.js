// import our models
const db = require('../models/userModels');
const bcrypt = require('bcrypt');

// initialize object to attach middleware to
const userController = {};

// salt generator and hashing function
const hashPassword = async (password, saltRounds = 8) => {
  try {
      // Generate a salt
      const salt = await bcrypt.genSalt(saltRounds);

      // Hash password
      return await bcrypt.hash(password, salt);
  } catch (error) {
      console.log(error);
  }

  // Return null if error
  return null;
};

// add a new user
userController.newUser = async (req, res, next) => {
  // extract neccesary params from request body
    const {email, password, firstname, lastname} = req.body;
    const newUserQuery = 'INSERT INTO users (email, password, hash, firstname, lastname) VALUES ($1, $2, $3, $4, $5)';
    try {
      const hash = await hashPassword(password);
      const params = [email, password, hash, firstname, lastname];
    // query
    await db.query(newUserQuery, params), (err, qres) => {
      if (err) {
        return next(err);
      } else {
        console.log(qres);
        res.locals.new = qres.rows;
        return next();
      }
    };
    } catch (error) {
      next(error)
    }
};


// middleware to get list of people we can send points to on the frontend
// (drop down select menu)
userController.getRecipients = (req, res, next) => {
  const recipQuery = 'SELECT * FROM users';
  db.query(recipQuery)
    .then((data) => {
      console.log(data.rows)
      res.locals.recipients = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: `userController.getRecipients: ERROR: ${err}`,
        message: {
          err: 'Error occured in userController.getRecipients. Check server logs for more details.',
        },
      });
    });
};

// get task feed
userController.getFeed = (req, res, next) => {
  db.query(feedQuery)
    .then((data) => {
      res.locals.feed = data.rows;
      // console.log('list of names: ' + res.locals.feed);
      return next();
    })
    .catch((err) => {
      return next({
        log: `userController.getFeed: ERROR: ${err}`,
        message: {
          err: 'Error occured in userController.getFeed. Check server logs for more details.',
        },
      });
    });
};

// middleware function executes post request, adds item to feed 
// when user hits submit on frontend
userController.postFeed = (req, res, next) => {
  // const params = [];
  // db.query(query, params)
  //   .then((result) => {
  //     res.locals.shoutoutFeed = result.rows[0];
  //     return next();
  //   })
  //   .catch((err) =>
  //     next(
  //       JSON.stringify({
  //         log: `userController.postFeed: ERROR: ${err}`,
  //         message: {
  //           err: 'Error occured in userController.postFeed. Check server logs for more details',
  //         },
  //       })
  //     )
  //   );
};


module.exports = userController;
