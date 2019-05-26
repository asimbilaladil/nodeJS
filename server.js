const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/starter', {useNewUrlParser: true});

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')




var mainController = require( __dirname + '/api/providers/Main' );
mainController.setup( app );

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
