const mongoose = require("mongoose");
const { Schema } = mongoose;

const schoolNewsSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model("schoolNews", schoolNewsSchema);
