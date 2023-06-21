"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
const UserControl_1 = __importDefault(require("../controllers/UserControl"));
const userControl = new UserControl_1.default();
userRouter.post("/", userControl.post);
userRouter.get("/", userControl.get);
userRouter.get("/:id", userControl.getOne);
userRouter.patch("/:id", userControl.patch);
userRouter.delete("/:id", userControl.delete);
exports.default = userRouter;
