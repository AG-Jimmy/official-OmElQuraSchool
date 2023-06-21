import schoolNewsModel from "../models/schoolNews";
import { Request, Response } from "express";

import HttpStatus from "../Enums/httpStatus";

export default class SchoolNewsControl {


  public post = async (req: Request, res: Response) => {
    const { title, description, image } = req.body;
    try {
      const schoolNews = new schoolNewsModel({ title, description, image });
      const createSchoolNews = await schoolNews.save();
      if (createSchoolNews) res.status(HttpStatus.CREATED).json(createSchoolNews)
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in post method School lNews`);
    }
  }

  public get = async (req: Request, res: Response) => {
    try {
      const getAllSchoolNews = await schoolNewsModel.find();
      if (getAllSchoolNews) res.status(HttpStatus.OK).json(getAllSchoolNews);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in get method school news `);
    }
  }

  public patch = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, description, image } = req.body;
    try {
      const updateSchoolNews = await schoolNewsModel.findOneAndUpdate(
        { _id: id },
        { title, description, image },
        { new: true }
      );
      if (updateSchoolNews) res.status(HttpStatus.CREATED).json(updateSchoolNews);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in patch method school news`);
    }
  }

  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleteSchoolNews = await schoolNewsModel.findOneAndDelete({
        _id: id,
      });
      if (deleteSchoolNews) res.status(HttpStatus.OK).json(deleteSchoolNews);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(`${error} in delete method School News`);
    }
  }
};
