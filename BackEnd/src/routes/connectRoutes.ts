import { Router } from "express";
import bestStudentRouter from './bestStudent'
const routes=Router()


routes.use('/bestStudent', bestStudentRouter);

export default routes