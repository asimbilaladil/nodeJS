var db = require( __dirname + '/db' );
/**
* Scehma of creating course.
*/
var courseSchema = db.Schema({
    id: String,
    name: String,
    lastUpdatedDate: String,
    courseCode: String,
    courseVersion: String,
    version: String,
    status: String,
    splash: [],
    icons: [],
    syllabus:[],
    books:[],
    notes:[],
    pastPapers:[],
    videos:[],
    workSheets:[],
    startMinutes:String,
    startSeconds:String,
    lastPublishTime : String,
    lastPublishStatus: Boolean,
    lastPublishDate: String,
    publishStartTime:Number,
    level: String,
    pspdfKitKey: String
});

module.exports = db.model( 'Course', courseSchema );