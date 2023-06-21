
import { Router } from 'express';
const schoolNewsRouter = Router();
import SchoolNewsControl from '../controllers/SchoolNewsControl';
const schoolNewsControl=new SchoolNewsControl()



schoolNewsRouter.post("/", schoolNewsControl.post);
schoolNewsRouter.get("/", schoolNewsControl.get);
schoolNewsRouter.patch("/:id", schoolNewsControl.patch);
schoolNewsRouter.delete("/:id", schoolNewsControl.delete);

export default schoolNewsRouter;
