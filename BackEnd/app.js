const Server = require("./src/server");
require("dotenv").config();
const port = process.env.PORT || 5000;
Server.start(port);
