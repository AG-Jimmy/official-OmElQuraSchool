import {Schema,model} from "mongoose";

const studentActivitiesModel:Schema= new Schema(
  {
    title: String,
    classroom: String,
    date: String,
    time: String,
  },
  { versionKey: false }
);

export default model("student_activities", studentActivitiesModel);

