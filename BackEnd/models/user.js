const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "minmax 3 char "],
    maxLength: 255,
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "minmax 3 char "],
    maxLength: 255,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "minmax 8 char "],
    maxLength: 255,
  }
},{ versionKey: false });


module.exports=mongoose.model('user',userModel) 