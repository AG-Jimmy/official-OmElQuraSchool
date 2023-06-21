import { Router } from "express";
import bestStudentRouter from './bestStudent'
import schoolNewsRouter from './schoolNews'
import studentActivitiesRouter from './studentActivities'
import usersRouter from './users'
const routes=Router()


routes.use('/bestStudent', bestStudentRouter);
routes.use('/schoolNews', schoolNewsRouter);
routes.use('/studentActivities', studentActivitiesRouter);
routes.use('/users', usersRouter);

export default routes