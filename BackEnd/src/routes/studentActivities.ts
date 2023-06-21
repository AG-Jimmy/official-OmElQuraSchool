
import { Router } from 'express';
const studentActivitiesRouter = Router();

import StudentActivitiesControl from '../controllers/studentActivitiesControl';
const studentActivitiesControl=new StudentActivitiesControl()


studentActivitiesRouter.post("/", studentActivitiesControl.post);
studentActivitiesRouter.get("/", studentActivitiesControl.get);
studentActivitiesRouter.patch("/:id", studentActivitiesControl.patch);
studentActivitiesRouter.delete("/:id", studentActivitiesControl.delete);

export default studentActivitiesRouter;
