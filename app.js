const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const db=require('./util/database');
const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const app = express();

 
 
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync();

 
 
 

app.listen(3000);
