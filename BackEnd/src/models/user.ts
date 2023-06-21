import {Schema,model} from "mongoose";

const userModel :Schema= new Schema(
  {
    firstName: {
        type: String,
        required: true,
        minlength: 3,
      },
      lastName: {
        type: String,
        required: true,
        minlength: 3,
      },
      email: {
        type: String,
        required: true,
        minlength: 10,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 8,
      }
  },
  { versionKey: false,timestamps:true }
);

export default model("user", userModel );

