
import { Router } from 'express';
const bestStudentRouter = Router();

import BestStudentControl from '../controllers/bestStudentControl';
const bestStudentControl=new BestStudentControl()


bestStudentRouter.post("/", bestStudentControl.post);
bestStudentRouter.get("/", bestStudentControl.get);
bestStudentRouter.patch("/:id", bestStudentControl.patch);
bestStudentRouter.delete("/:id", bestStudentControl.delete);

export default bestStudentRouter;
