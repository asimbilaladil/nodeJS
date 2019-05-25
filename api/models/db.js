/**
* This module is responsible for configuring how the server
* communicates with its database.
*/
// Our logger for logging to file and console
var config = {};
config.rollbar = {};
config.rollbar.POST_SERVER_ITEM_ACCESS_TOKEN = '1725123a8ee84d27b6a1865d56554721'; 
var rollbar = require('rollbar');
rollbar.init(config.rollbar.POST_SERVER_ITEM_ACCESS_TOKEN);
// Reference to the module to be exported
db = module.exports = require( 'mongoose' );
db.connect( config.db.host, function error (err) {
    if (err)  rollbar.handleError(err);
});

