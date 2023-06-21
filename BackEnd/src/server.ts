import express from"express";
import cors from "cors";
// import bestStudentRouter from"./routes/bestStudent";
import routes from './routes/connectRoutes'
import { ConnectionDB } from "./models/DBConnect";
import 'dotenv/config';

const app = express();
//middleware

app.use(cors());
app.use(express.json());

app.use(routes);


export class Server {
  private port:any = process.env.PORT || 5000;

  public start = async () => {
   const connectionToDB=new ConnectionDB();
   connectionToDB.connectToDatabase().then(()=>{
    app.listen(this.port,() => {
          console.log(`
          =======================================
          Mongo DB is Running in StudentData  ...
          server side is running on port :${this.port} 
          =======================================
          `);
        })
   }).catch((error)=>{
    console.log(`${error}
        =======================================
        Mongo DB is Don't Work ...
        server side is running on port :${this.port} but not can access in server 
        =======================================
        `);
    console.log('Server initialization cancelled');
    process.exit(0);
   })
   
  };
}

