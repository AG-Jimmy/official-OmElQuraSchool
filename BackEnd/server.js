const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bestStudentRouter = require("./routes/bestStudent");
const schoolNewsRouter = require("./routes/schoolNews");
const studentActivitiesRouter = require("./routes/studentActivities");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

app.use("/bestStudent", bestStudentRouter);
app.use("/schoolNew", schoolNewsRouter);
app.use("/studentActivities", studentActivitiesRouter);
app.use("/users", usersRouter);

async function main() {
  await mongoose.connect(uri);
  app.listen(port, () => {
    console.log(`server is running on port:${port} `);
  });
}
main();
