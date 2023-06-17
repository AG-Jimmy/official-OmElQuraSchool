"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const bestStudentControl_1 = __importDefault(require("../controllers/bestStudentControl"));
const bestStudentControl = new bestStudentControl_1.default();
router.post("/", bestStudentControl.post);
router.get("/", bestStudentControl.get);
router.patch("/:id", bestStudentControl.patch);
router.delete("/:id", bestStudentControl.delete);
exports.default = router;
