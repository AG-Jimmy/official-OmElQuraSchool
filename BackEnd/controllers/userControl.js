const userModel = require("../models/user");
const joi = require('joi');
module.exports = {

  post: async (req, res) => {
      const schema=  joi.object({
        firstName:joi.string().min(3).max(50).required().trim(),
        lastName:joi.string().min(3).max(50).required().trim(),
        email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().trim(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      })
     const {error} = await schema.validate(req.body)
     if(error){
        return res.status(400).json({message:error.details[0].message})
     }
      const { firstName, lastName, email, password } = req.body;
      const user = new userModel({ firstName, lastName, email, password });
      const createUser = user.save();
      createUser ? res.status(201).json(createUser) : "error in post user";
  },







  get: async (req, res) => {
    try {
        const getAllUsers = await userModel.find({})
        getAllUsers?res.status(200).json(getAllUsers):'error'
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
