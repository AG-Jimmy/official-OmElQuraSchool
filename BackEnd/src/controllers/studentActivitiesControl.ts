import studentActivitiesModel from "../models/studentActivities";
import { Request, Response } from "express";

import HttpStatus from "../Enums/httpStatus";

export default class StudentActivitiesControl {


  public post = async (req: Request, res: Response) => {
    const { title, classroom, date,time } = req.body;
    try {
      const studentActivities = new studentActivitiesModel({ title, classroom, date,time});
      const createStudentActivities = await studentActivities.save();
      if (createStudentActivities) res.status(HttpStatus.CREATED).json(createStudentActivities)
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in post method Student Activities`);
    }
  }

  public get = async (req: Request, res: Response) => {
    try {
      const getAllStudentActivities = await studentActivitiesModel.find();
      if (getAllStudentActivities) res.status(HttpStatus.OK).json(getAllStudentActivities);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in get method Student Activities `);
    }
  }

  public patch = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, classroom, date,time } = req.body;
    try {
      const updateStudentActivities = await studentActivitiesModel.findOneAndUpdate(
        { _id: id },
        { title, classroom, date,time},
        { new: true }
      );
      if (updateStudentActivities) res.status(HttpStatus.CREATED).json(updateStudentActivities);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in patch method Student Activities`);
    }
  }

  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleteStudentActivities = await studentActivitiesModel.findOneAndDelete({
        _id: id,
      });
      if (deleteStudentActivities) res.status(HttpStatus.OK).json(deleteStudentActivities);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in delete method Student Activities`);
    }
  }
};
