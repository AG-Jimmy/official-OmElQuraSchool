const bestStudentModel = require("../models/bestStudent");

const getBestStudent = async () => {
  const getAllBestStudent = await bestStudentModel.find();
  return getAllBestStudent;
};
const setBestStudent = async ({ name, classroom, rating }) => {
  const bestStudent = new bestStudentModel({ name, classroom, rating });
  const createdBestStudent = await bestStudent.save();
  return createdBestStudent;
};

const updateBestStudent = async ({ id, name, classroom, rating }) => {
  const updateBestStudent = await bestStudentModel.findOneAndUpdate(
    { _id: id },
    { name, classroom, rating },
    { new: true }
  );
  return updateBestStudent;
};
const deleteBestStudent = async (id) => {
  const deleteBestStudent = await bestStudentModel.findOneAndDelete({
    _id: id,
  });
  return deleteBestStudent;
};

module.exports = {
  getBestStudent,
  setBestStudent,
  updateBestStudent,
  deleteBestStudent,
};
