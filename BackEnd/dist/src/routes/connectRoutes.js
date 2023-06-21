"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bestStudent_1 = __importDefault(require("./bestStudent"));
const schoolNews_1 = __importDefault(require("./schoolNews"));
const studentActivities_1 = __importDefault(require("./studentActivities"));
const users_1 = __importDefault(require("./users"));
const routes = (0, express_1.Router)();
routes.use('/bestStudent', bestStudent_1.default);
routes.use('/schoolNews', schoolNews_1.default);
routes.use('/studentActivities', studentActivities_1.default);
routes.use('/users', users_1.default);
exports.default = routes;
