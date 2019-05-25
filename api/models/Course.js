var db = require( __dirname + '/db' );
/**
* Scehma of creating course.
*/
var courseSchema = db.Schema({
    courseId: String,
    name: String
});

module.exports = db.model( 'Course', courseSchema );