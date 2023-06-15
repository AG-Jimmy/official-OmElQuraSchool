// const router = require("express").Router();
import { Router } from 'express';
const router = Router();

import BestStudentControl from '../controllers/bestStudentControl';
const bestStudentControl=new BestStudentControl()
router.post("/", bestStudentControl.post);
router.get("/", bestStudentControl.get);
router.patch("/:id", bestStudentControl.patch);
router.delete("/:id", bestStudentControl.delete);

export default router;
