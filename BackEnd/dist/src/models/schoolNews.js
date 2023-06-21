"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schoolNewsSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    image: String,
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("schoolNews", schoolNewsSchema);
