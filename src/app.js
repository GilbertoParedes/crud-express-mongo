const path = require('path');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

const indexRoutes = require('./routes/index');




// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})