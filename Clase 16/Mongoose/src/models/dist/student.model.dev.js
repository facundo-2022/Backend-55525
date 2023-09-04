"use strict";

var mongoose = require("mongoose");

var studentCollection = "students";
var studentSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [{
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
      }
    }],
    "default": []
  }
});
studentSchema.pre("find", function () {
  this.populate("coruses.course");
});
var studentModel = mongoose.model(studentCollection, studentSchema);
module.exports = {
  studentModel: studentModel
};