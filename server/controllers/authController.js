const bcrypt = require('bcrypt');
const db = require('../models/userModels');
const authController = {};



const comparePassword = async (password, hash) => {
  try {
      // Compare password
      return await bcrypt.compare(password, hash);
  } catch (error) {
      console.log(error);
  }

  // Return false if error
  return false;
}

// authController.checkUser = async (req, res, next) => {
//   const { email, password } = req.body;
//   // console.log(req.body)
//   const userQuery =
//   'SELECT * FROM users WHERE email = $1 AND password = $2';
//   const params = [email, password];
//   // grab user entered login and password, pull from database
//   //  and use compare password to compare the password and hash
//   await db.query(userQuery, params), async (err, qres) => {
//     try {
//       const isValid = await comparePassword(password, qres.hash)
//       console.log(`Password is ${!isValid ? 'not' : ''} valid!`);
//     }
//     catch {
//     }
//       console.log(qres);
//       res.locals.new = qres.rows;
//       return next();
//     }
//   };


module.exports = authController;