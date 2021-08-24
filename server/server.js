const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes');
// const cookieParser = require('cookie-parser');

const PORT = 3000;

// parse through json payloads
app.use(express.json()); 

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true })); 

// parses incoming cookies
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, '../index.html')));

// router
// app.use('/api', apiRouter);

// global error handler
app.use((err, req, res, next) => {
  const defErr = {
    log: 'sent to the global error handler',
    status: 500,
    msg: {err: 'error in server'}
  };
  const errorObj = Object.assign(defErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.msg);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;