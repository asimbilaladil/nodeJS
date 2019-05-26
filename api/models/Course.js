var db = require( __dirname + '/db' );
/**
* Scehma of creating course.
*/
var courseSchema = db.Schema({
    name: String
});

module.exports = db.model( 'Course', courseSchema );