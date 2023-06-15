import mongoose from "mongoose";
const { Schema } = mongoose;

const bestStudentSchema = new Schema(
  {
    name: String,
    classroom: String,
    rating: Number,
  },
  { versionKey: false }
);

export default mongoose.model("bestStudent", bestStudentSchema);

