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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const bestStudent_1 = __importDefault(require("./routes/bestStudent"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const uri = process.env.ATLAS_URI;
app.use("/bestStudent", bestStudent_1.default);
class Server {
    constructor() {
        this.start = (PORT) => __awaiter(this, void 0, void 0, function* () {
            try {
                let mongoDBConnect = yield mongoose_1.default.connect(uri);
                if (mongoDBConnect) {
                    return app.listen(PORT, () => {
                        console.log(`
        =======================================
        Mongo DB is Running in StudentData ...
        server side is running on port :${PORT} 
        =======================================
        `);
                    });
                }
            }
            catch (error) {
                return app.listen(PORT, () => {
                    console.log(`${error}
        =======================================
        Mongo DB is Don't Work ...
        server side is running on port :${PORT} but not can access in server 
        =======================================
        `);
                });
            }
        });
    }
}
exports.default = new Server();
