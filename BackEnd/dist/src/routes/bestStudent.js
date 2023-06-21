"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bestStudentRouter = (0, express_1.Router)();
const bestStudentControl_1 = __importDefault(require("../controllers/bestStudentControl"));
const bestStudentControl = new bestStudentControl_1.default();
bestStudentRouter.post("/", bestStudentControl.post);
bestStudentRouter.get("/", bestStudentControl.get);
bestStudentRouter.patch("/:id", bestStudentControl.patch);
bestStudentRouter.delete("/:id", bestStudentControl.delete);
exports.default = bestStudentRouter;
