import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required : true,
    },
    fullDescription:{
        type:String,
        required : true,
    },
    category:{
        type:String,
        required : true,
    },
    image:{
        type:String,
        required : true,
    },
    projectLink:{
        type:String,
        required : true,
    },
    date:{
        type:Date,
        default: Date.now()
    },
  
})

const blogModel =mongoose.models.blog || mongoose.model('blog', Schema)
export default blogModel;