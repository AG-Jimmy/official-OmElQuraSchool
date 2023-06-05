const studentActivitiesModel = require("../models/studentActivities");

module.exports = {
  post: async (req, res) => {
    try {
      const { title, classroom, date, time } = req.body;
      const studentActivities = new studentActivitiesModel({
        title,
        classroom,
        date,
        time,
      });
      const createStudentActivities = await studentActivities.save();
      createStudentActivities
        ? res.status(201).json(createStudentActivities)
        : "Error in post";
    } catch (err) {
      res.status(500).json(err);
    }
  },
  get: async (req, res) => {
    try {
      const getAllStudentActivities = await studentActivitiesModel.find({});
      getAllStudentActivities
        ? res.status(200).json(getAllStudentActivities)
        : "error in get method";
    } catch (err) {
      res.status(500).json(err);
    }
  },
  patch: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, classroom, date, time } = req.body;
      const updateStudentActivitie =
        await studentActivitiesModel.findOneAndUpdate(
          { _id: id },
          { title, classroom, date, time },
          { new: true }
        );
      updateStudentActivitie
        ? res.status(200).json(updateStudentActivitie)
        : "error in patch method";
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteStudentActivitie =
        await studentActivitiesModel.findOneAndDelete({ _id: id });
      deleteStudentActivitie
        ? res.status(200).json(deleteStudentActivitie)
        : "error in delete method";
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
