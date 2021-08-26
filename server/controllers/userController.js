// import our models
const db = require('../models/userModels');

// initialize object to attach middleware to
const userController = {};

// add a new user
userController.newUser = (req, res, next) => {
  // extract neccesary params from request body
  const { email, password, firstname, lastname} = req.body;
  const newUserQuery = 'INSERT INTO users (email, password, firstname, lastname) VALUES ($1, $2, $3, $4)';
  const params = [email, password, firstname, lastname];
  // query
  db.query(newUserQuery, params)
    .then((result) => {
      res.locals.user = result.rows[0];
      return next();
    })
    .catch((err) =>
      next(
        JSON.stringify({
          log: `userController.newUser: ERROR: ${err}`,
          message: {
            err: 'Error occured in userController.newUser. Check server logs for more details',
          },
        })
      )
    );
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
