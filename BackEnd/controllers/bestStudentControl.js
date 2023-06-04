const bestStudentModel = require('../models/bestStudent')

module.exports = {
    post: async (req, res) => {
        const { name, classroom,rating } = req.body
        const bestStudent = new bestStudentModel({name, classroom,rating })
        const createdBestStudent = await bestStudent.save()
        createdBestStudent ? res.status(201).json(createdBestStudent) : " some Error in posts routes :post";
    },
    get: async (req, res) => {
        const getAllBestStudent = await bestStudentModel.find()
        getAllBestStudent ? res.status(200).json(getAllBestStudent) : " some Error in posts routes: Get";
    },
    patch: async (req, res) => {
        const id = req.params.id
        const { name, classroom,rating  } = req.body
        const updateBestStudent = await bestStudentModel.findOneAndUpdate({ _id: id }, { name, classroom,rating}, { new: true })
        updateBestStudent ? res.status(200).json(updateBestStudent) : " some Error in posts routes: patch";
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteBestStudent = await bestStudentModel.findByIdAndDelete({ _id: id })
        deleteBestStudent ? res.status(200).json(deleteBestStudent) : " some Error in posts routes: delete";
    }

}