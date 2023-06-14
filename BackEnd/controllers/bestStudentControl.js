const bestStudentModel = require("../models/bestStudent");

module.exports = {
  post: async (req, res) => {
    try {
      const { name, classroom, rating } = req.body;
      const bestStudent = new bestStudentModel({ name, classroom, rating });
      const createBestStudent = await bestStudent.save();
      createBestStudent
        ? res.status(201).json(createBestStudent)
        : "error in post";
    } catch (error) {
      res.status(500).json(`${error} in post new school News`);
    }
  },
  get: async (req, res) => {
    try {
      const getAllBestStudent = await bestStudentModel.find();
      getAllBestStudent ? res.status(200).json(getAllBestStudent) :0;
    } catch (error) {
      res.status(500).json(`${error} in get new school News`);
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
      updateBestStudent ? res.status(201).json(updateBestStudent) : 0;
    } catch (error) {
      res.status(500).json(`${error} in patch new school News`);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteBestStudent = await bestStudentModel.findOneAndDelete({
        _id: id,
      });
      deleteBestStudent ? res.status(200).json(deleteBestStudent) : "";
    } catch (error) {
      res.status(500).json(`${error} in delete new school News`);
    }
  },
};
