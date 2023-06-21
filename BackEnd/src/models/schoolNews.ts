import {Schema,model} from "mongoose";



const schoolNewsSchema:Schema= new Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  { versionKey: false }
);

export default model("schoolNews", schoolNewsSchema);

