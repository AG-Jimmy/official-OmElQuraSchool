const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentActivitiesModel = new Schema(
  {
    title: String,
    classroom: String,
    date: String,
    time: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("student_activities", studentActivitiesModel);
