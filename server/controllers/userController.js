// import our models
const db = require('../models/userModels');

// initialize object to attach middleware to
const userController = {};


// middleware to perform get request, confirm user is in database
userController.checkUsers = (req, res, next) => {
  const userQuery =
    'SELECT * FROM users WHERE email = $1 AND password = $2';
  const { email, password } = req.body;
  const params = [email, password];
  db.query(userQuery, params)
  .then ((data)=>{  
  if (data.rows[0].email === email && data.rows[0].password === password) {
    console.log('email', data.rows[0].email )
    console.log('passworddd', data.rows[0].password )
      // req.session.loggedin = true;
      // req.session.username = username;
    res.status(200).end()
  } else {
    res.status(404).end()
  }
}).catch(err=>{
    console.log(err)
    return next()
})
};





module.exports = userController;
