const mongoose =require('mongoose')
const { Schema } = mongoose;

const bestStudentSchema=new Schema({
name:String,
classroom:String,
rating:Number
})

module.exports=mongoose.model('bestStudent',bestStudentSchema)

/**schoolNews

studentActivities*/