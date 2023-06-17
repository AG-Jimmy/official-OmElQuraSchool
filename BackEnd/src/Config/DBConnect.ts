import mongoose from "mongoose";
import 'dotenv/config';

export class ConnectionDB {

    private uri:any = process.env.ATLAS_URI;

   public connectToDatabase =async()=>{
    const mongoDBConnect= await mongoose.connect(this.uri)
   }

}