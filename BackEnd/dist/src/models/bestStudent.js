"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bestStudentSchema = new mongoose_1.Schema({
    name: String,
    classroom: String,
    rating: Number,
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("bestStudent", bestStudentSchema);
