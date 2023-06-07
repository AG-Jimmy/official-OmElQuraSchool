const userModel = require("../models/user");

module.exports = {
  post: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = new userModel({ firstName, lastName, email, password });
      const createUser = user.save();
      createUser ? res.status(201).json(createUser) : "error in post user";
    } catch (err) {
      res.status(500).json(err);
    }
  },
  get: async (req, res) => {
    try {
        const getAllUsers = await userModel.find({})
        getAllUsers?res.status(200).json(getAllUsers):'errror'
    } catch (err) {
      res.status(500).json(err);
    }
  },
  patch: async (req, res) => {
    try {
         const id=req.params.id
         const {firstName, lastName, email, password}=req.body
         const updateUser= await userModel.findOneAndUpdate({_id:id},{firstName, lastName, email, password},{new:true})
         updateUser?res.status(201).json(updateUser):'error';

    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    try {
        const id=req.params.id
        const deleteUser=await userModel.findOneAndDelete({_id:id})
        deleteUser?res.status(200).json(deleteUser):'error'
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getOne: async (req, res) => {
    try {
        const id=req.params.id
        const getOneUser = await userModel.findOne({_id:id})
        getOneUser?res.status(200).json(getOneUser):'errror'
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
