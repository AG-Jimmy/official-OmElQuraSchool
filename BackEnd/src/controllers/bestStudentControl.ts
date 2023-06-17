import bestStudentModel from "../models/bestStudent";
import { Request,Response } from "express";
import HttpStatus from "../Enums/httpStatus";

export default class BestStudentControl {


 public post= async (req:Request, res:Response) => {
    try {
      const { name, classroom, rating }= req.body;
      const bestStudent = new bestStudentModel({ name, classroom, rating });
      const createBestStudent = await bestStudent.save();
    if( createBestStudent) res.status(HttpStatus.CREATED).json(createBestStudent);
    } catch (error) {
      res.status(400).json(`${error} in post method best student`);
    }
  }

  public get= async (req:Request, res:Response) => {
    try {
      const getAllBestStudent = await bestStudentModel.find();
      if( getAllBestStudent) res.status(HttpStatus.OK).json(getAllBestStudent);
    } catch (error) {
      res.status(500).json(`${error} in get method best student `);
    }
  }

  public patch= async (req:Request, res:Response) => {
    try {
      const id = req.params.id;
      const { name, classroom, rating } = req.body;
      const updateBestStudent = await bestStudentModel.findOneAndUpdate(
        { _id: id },
        { name, classroom, rating },
        { new: true }
      );
      if( updateBestStudent) res.status(HttpStatus.CREATED).json(updateBestStudent);
    } catch (error) {
      res.status(500).json(`${error} in patch method best student`);
    }
  }
  
  public delete= async (req:Request, res:Response) => {
    try {
      const id = req.params.id;
      const deleteBestStudent = await bestStudentModel.findOneAndDelete({
        _id: id,
      });
      if( deleteBestStudent) res.status(HttpStatus.OK).json(deleteBestStudent);
    } catch (error) {
      res.status(500).json(`${error} in delete method best student`);
    }
  }
};
