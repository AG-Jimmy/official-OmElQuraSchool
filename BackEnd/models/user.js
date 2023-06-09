const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1025,
  }
},{ versionKey: false,timestamps:true });


module.exports=mongoose.model('user',userModel) 