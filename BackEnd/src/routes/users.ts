
import { Router } from 'express';
const userRouter = Router();
import UserControl from '../controllers/UserControl';
const userControl=new UserControl()



userRouter.post("/", userControl.post);
userRouter.get("/", userControl.get);
userRouter.get("/:id", userControl.getOne);
userRouter.patch("/:id", userControl.patch);
userRouter.delete("/:id", userControl.delete);

export default userRouter;