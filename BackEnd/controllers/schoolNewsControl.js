const schoolNewsModel = require("../models/schoolNews");

module.exports = {
  post: async (req, res) => {
    try {
      const { title, description, image } = req.body;
      const schoolNews = new schoolNewsModel({ title, description, image });
      const createSchoolNews = await schoolNews.save();
      createSchoolNews
        ? res.status(201).json(createSchoolNews)
        : "error in post";
    } catch (error) {
      res.status(500).json(`${error} in post new school News`);
    }
  },
  get: async (req, res) => {
    try {
      const getAllSchoolNews = await schoolNewsModel.find();
      getAllSchoolNews ? res.status(200).json(getAllSchoolNews) : "";
    } catch (error) {
      res.status(500).json(`${error} in get new school News`);
    }
  },
  patch: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, description, image } = req.body;
      const updateSchoolNews = await schoolNewsModel.findOneAndUpdate(
        { _id: id },
        { title, description, image },
        { new: true }
      );
      updateSchoolNews ? res.status(201).json(updateSchoolNews) : "";
    } catch (error) {
      res.status(500).json(`${error} in patch new school News`);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteSchoolNews = await schoolNewsModel.findOneAndDelete({
        _id: id,
      });
      deleteSchoolNews ? res.status(200).json(deleteSchoolNews) : "";
    } catch (error) {
      res.status(500).json(`${error} in delete new school News`);
    }
  },
};
