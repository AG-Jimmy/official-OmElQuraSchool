/*ToDo
*handel OOP like encapsulations principles 
on all method best Student 

*try handling dependency inaction

*/
const bestStudentModel = require("../models/bestStudent");

class BestStudentDatabase {
  constructor(name, classroom, rating, id) {
    this.name = name;
    this.classroom = classroom;
    this.rating = rating;
    this.id = id;
    /* privet property 
       example-->  let username;
      don't set any  this. or declare value 
      */
  }
  /*static method
  *static method just class can be calling 
  example --> static sayHallo(){return 'hello'} 

  ----------------------------------------------
  error >let objName = new BestStudentDatabase()
        > objName.sayHallo()
  output> error undefined 
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  true  >BestStudentDatabase.sayHallo()
  output> hello

   */

  async postBestStudent({ name, classroom, rating }) {
    const bestStudent = new bestStudentModel({ name, classroom, rating });
    const createdBestStudent = await bestStudent.save();
    return createdBestStudent;
  }
  async getBestStudent() {
    const getAllBestStudent = await bestStudentModel.find();
    return getAllBestStudent;
  }
  async updateBestStudent({ name, classroom, rating, id }) {
    const UpdateBestStudent = await bestStudentModel.findOneAndUpdate(
      { _id: id },
      { name, classroom, rating },
      { new: true }
    );
    return UpdateBestStudent;
  }
  //   async deleteBestStudent() {}
}
module.exports = BestStudentDatabase;
