"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentActivitiesRouter = (0, express_1.Router)();
const studentActivitiesControl_1 = __importDefault(require("../controllers/studentActivitiesControl"));
const studentActivitiesControl = new studentActivitiesControl_1.default();
studentActivitiesRouter.post("/", studentActivitiesControl.post);
studentActivitiesRouter.get("/", studentActivitiesControl.get);
studentActivitiesRouter.patch("/:id", studentActivitiesControl.patch);
studentActivitiesRouter.delete("/:id", studentActivitiesControl.delete);
exports.default = studentActivitiesRouter;
