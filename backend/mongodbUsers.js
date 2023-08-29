
const mongoose=require('mongoose');

const newSchema=new mongoose.Schema({
   firstName:{
    type:String,
    required:true
   },
   secondName:{
    type:String,
    required:true
   },
   phone:{
    type:String,
    required:true
   },
    account:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    }
})

const joysUsers = mongoose.model("joysUsers",newSchema);

module.exports=joysUsers;