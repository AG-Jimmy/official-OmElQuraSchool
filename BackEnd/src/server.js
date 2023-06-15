const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bestStudentRouter = require("./routes/bestStudent");
const schoolNewsRouter = require("./routes/schoolNews");
const studentActivitiesRouter = require("./routes/studentActivities");
const usersRouter = require("./routes/users");

require("dotenv").config();

// const app = express();
const app =new express();
//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

app.use("/bestStudent", bestStudentRouter);
app.use("/schoolNew", schoolNewsRouter);
app.use("/studentActivities", studentActivitiesRouter);
app.use("/users", usersRouter);
// app.use(cors());
// app.use(express.json());


class Server {
  start = async (PORT) => {
    await mongoose.connect(uri);
    return app.listen(PORT, () => {
      console.log(`
      =======================================
      Mongo DB is Running in StudentData ...
      server side is running on port :${PORT} 
      =======================================
      `);
    });
  };
}
module.exports = new Server();
