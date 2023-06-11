"use strict";
const bestStudentInterface = require("../dependency_injection/bestStudentInterface");

module.exports = {
  post: async (req, res) => {
    try {
      const { name, classroom, rating } = req.body;
      const bestStudent = (
        await bestStudentInterface.setBestStudent({ name, classroom, rating })
      )//.toObject();
      bestStudent ? res.status(201).json(bestStudent) : 0;
      // const bestStudent = new bestStudentModel({ name, classroom, rating });
      // const createdBestStudent = await bestStudent.save();
      // createdBestStudent
      //   ? res.status(201).json(createdBestStudent)
      //   : " some Error in posts routes :post";
    } catch (error) {
      res.status(500).json(`${error} in created new best student`);
    }
  },

  get: async (req, res) => {
    try {
      const getBestStudent = await bestStudentInterface.getBestStudent();
      getBestStudent ? res.status(200).json(getBestStudent) : 0;
      // const getAllBestStudent = await bestStudentModel.find();
      // getAllBestStudent
      //   ? res.status(200).json(getAllBestStudent)
      //   : " some Error in posts routes: Get";
    } catch (error) {
      res.status(500).json(`${error} in get best student`);
    }
  },

  patch: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, classroom, rating } = req.body;
      const updateBestStudent = await bestStudentInterface.updateBestStudent({
        name,
        classroom,
        rating,
        id,
      });
      updateBestStudent ? res.status(200).json(updateBestStudent) : 0;
      // const updateBestStudent = await bestStudentModel.findOneAndUpdate(
      //   { _id: id },
      //   { name, classroom, rating },
      //   { new: true }
      // );
      // updateBestStudent
      //   ? res.status(200).json(updateBestStudent)
      //   : " some Error in posts routes: patch";
    } catch (error) {
      res.status(500).json(`${error} in patch best student`);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteBestStudent = await bestStudentInterface.deleteBestStudent(id);
      deleteBestStudent ? res.status(200).json(deleteBestStudent) : 0;
      // const deleteBestStudent = await bestStudentModel.findByIdAndDelete({
      //   _id: id,
      // });
      // deleteBestStudent
      //   ? res.status(200).json(deleteBestStudent)
      //   : " some Error in posts routes: delete";
    } catch (error) {
      res.status(500).json(`${error} in delete best student `);
    }
  },
};
