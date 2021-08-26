const bcrypt = require('bcrypt');
const authController = {};

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

// const comparePassword = async (password, hash) => {
//   try {
//       // Compare password
//       return await bcrypt.compare(password, hash);
//   } catch (error) {
//       console.log(error);
//   }

//   // Return false if error
//   return false;
// };

authController.hash = (req, res, next) => {
 const { password} = req.body;
 const userQuery = 'INSERT INTO users (hash) VALUES ($1)';
(async () => {
  const hashCode = await hashPassword(password);

  db.query(userQuery, [hashCode])
    .then((result) => {
      console.log(result.rows)
      res.locals.hashed = result.rows[0];
      return next();
    })
    .catch((err) =>
      next(
        JSON.stringify({
          log: `userController.postFeed: ERROR: ${err}`,
          message: {
            err: 'Error occured in userController.postFeed. Check server logs for more details',
          },
        })
      )
    );
})();
}

authController.checkUser = (req, res, next) => {
  const { email, password } = req.body;
  const userQuery =
    'SELECT email, password FROM users WHERE email = $1 AND password = $2';
  const params = [email, password];
  db.query(userQuery, params)
    .then((data) => {
      res.locals.users = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: `userController.checkUser: ERROR: ${err}`,
        message: {
          err: 'Error occured in userController.checkUser. Check server logs for more details.',
        },
      });
    });
};


module.exports = authController;