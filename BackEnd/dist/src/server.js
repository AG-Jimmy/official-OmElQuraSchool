"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectRoutes_1 = __importDefault(require("./routes/connectRoutes"));
const DBConnect_1 = require("./models/DBConnect");
require("dotenv/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(connectRoutes_1.default);
class Server {
    constructor() {
        this.port = process.env.PORT || 5000;
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            const connectionToDB = new DBConnect_1.ConnectionDB();
            connectionToDB.connectToDatabase().then(() => {
                app.listen(this.port, () => {
                    console.log(`
          =======================================
          Mongo DB is Running in StudentData  ...
          server side is running on port :${this.port} 
          =======================================
          `);
                });
            }).catch((error) => {
                console.log(`${error}
        =======================================
        Mongo DB is Don't Work ...
        server side is running on port :${this.port} but not can access in server 
        =======================================
        `);
                console.log('Server initialization cancelled');
                process.exit(0);
            });
        });
    }
}
exports.Server = Server;
