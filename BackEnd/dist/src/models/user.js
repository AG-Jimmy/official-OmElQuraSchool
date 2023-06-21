"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
}, { versionKey: false, timestamps: true });
exports.default = (0, mongoose_1.model)("user", userModel);
