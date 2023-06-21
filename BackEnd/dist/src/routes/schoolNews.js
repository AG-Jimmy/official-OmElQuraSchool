"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolNewsRouter = (0, express_1.Router)();
const SchoolNewsControl_1 = __importDefault(require("../controllers/SchoolNewsControl"));
const schoolNewsControl = new SchoolNewsControl_1.default();
schoolNewsRouter.post("/", schoolNewsControl.post);
schoolNewsRouter.get("/", schoolNewsControl.get);
schoolNewsRouter.patch("/:id", schoolNewsControl.patch);
schoolNewsRouter.delete("/:id", schoolNewsControl.delete);
exports.default = schoolNewsRouter;
