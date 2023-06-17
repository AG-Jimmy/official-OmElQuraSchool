import {Schema,model} from "mongoose";



const bestStudentSchema:Schema= new Schema(
  {
    name: String,
    classroom: String,
    rating: Number,
  },
  { versionKey: false }
);

export default model("bestStudent", bestStudentSchema);

