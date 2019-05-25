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


  app.get('/testDB', function (req, res) {
      var responseJSON = {}
      Course.findOne({
                courseId: 1
              }, function(err, c) {

                console.log("I AM HERE");
                if (err) {
                  console.log("I AM HERE err");
                  responseJSON.status = 'FAIL';
                  responseJSON.message = JSON.stringify(err);
                  // Response to client.
                  res.status(HTTP.INTERNAL_SERVER_ERROR).jsonp(responseJSON);
                  return;
                }

                if (c) {
                  console.log("I AM HERE data");
                    responseJSON.status = 'OK';
                    res.status(HTTP.OK).jsonp(responseJSON);
                    return;
                  //res.render('index', {weather: "DB TEST WORKS", error: null});
                }
      });


  })


}