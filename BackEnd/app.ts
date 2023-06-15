import Server from "./src/server";
require("dotenv").config();
const port:any = process.env.PORT || 5000;
Server.start(port);
