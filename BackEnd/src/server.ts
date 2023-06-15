import express from"express";
import cors from "cors";
import mongoose from "mongoose";
import bestStudentRouter from"./routes/bestStudent";


require("dotenv").config();//i'll search a dotenv with import

const app = express();
//middleware
app.use(cors());
app.use(express.json());

const uri:any = process.env.ATLAS_URI||'';
 
app.use("/bestStudent", bestStudentRouter);


class Server {
  start = async (PORT:number) => {
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
export default  new Server();
