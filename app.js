const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
 const employeeRoute = require('./routes/employee');
 const userRoute = require('./routes/user');


app.use(bodyParser.urlencoded({extended: false}));


app.use(adminRoutes);
  app.use(employeeRoute);
  app.use(userRoute);


app.listen(3001);
