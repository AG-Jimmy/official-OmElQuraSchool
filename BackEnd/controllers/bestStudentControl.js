"use strict";
const bestStudentModel = require('../models/bestStudent');


module.exports = {
  post: async (req, res) => {
    try {
      const { name, classroom, rating } = req.body;

      const bestStudent = new bestStudentModel({ name, classroom, rating });
      const createdBestStudent = await bestStudent.save();
      if(createdBestStudent)
         res.status(201).json(createdBestStudent)
    } catch (error) {
      res.status(500).json(`${error} in created new best student`);
    }
  },

  get: async (req, res) => {
    try {

      const getAllBestStudent = await bestStudentModel.find();
      if(getAllBestStudent)
         res.status(201).json(getAllBestStudent)
    } catch (error) {
      res.status(500).json(`${error} in get best student`);
    }
  },

  patch: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, classroom, rating } = req.body;

      const updateBestStudent = await bestStudentModel.findOneAndUpdate(
        { _id: id },
        { name, classroom, rating },
        { new: true }
      );
      if(updateBestStudent)
         res.status(201).json(updateBestStudent)
    } catch (error) {
      res.status(500).json(`${error} in patch best student`);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const deleteBestStudent = await bestStudentModel.findByIdAndDelete({
        _id: id,
      });
      if(deleteBestStudent)
      res.status(201).json(deleteBestStudent)
    } catch (error) {
      res.status(500).json(`${error} in delete best student `);
    }
  },
};
