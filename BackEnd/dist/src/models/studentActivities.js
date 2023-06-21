"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentActivitiesModel = new mongoose_1.Schema({
    title: String,
    classroom: String,
    date: String,
    time: String,
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("student_activities", studentActivitiesModel);
