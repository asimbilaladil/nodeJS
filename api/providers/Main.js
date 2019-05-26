main = module.exports = {};

main.setup = function(app) {

  "use strict"
  // Course
  var Course = require(__dirname + '/../models/Course');
  var HTTP = require(__dirname + '/../../http-response');


    app.get('/', function (req, res) {
      res.render('index', {weather: null, error: null});
    })

    app.post('/', function (req, res) {
      let city = req.body.city;
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

      request(url, function (err, response, body) {
        if(err){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weather = JSON.parse(body)
          if(weather.main == undefined){
            res.render('index', {weather: null, error: 'Error, please try again'});
          } else {
            let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            res.render('index', {weather: weatherText, error: null});
          }
        }
      });
    })


  app.get('/test/db', function (req, res) {
      var responseJSON = {}

      var responseJSON = {}
      Course.find(function(err, data) {

          if (err) {
            res.send(err);
            return;
          }
          
          responseJSON.data = data;
          responseJSON.success = true;
          res.status(HTTP.OK).jsonp(responseJSON);
          return;

      });

  })


}