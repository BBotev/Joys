
const mongoose=require('mongoose');

const newSchema=new mongoose.Schema({
    User_id:{
        type:String,
        required:true
       },
       status:{
        type:String,
        require:true
       },
       date:{
        type:String,
        require:true
       },
       name:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       phone:{
        type:String,
        required:true
       },
       products:{
        type:Array,
        required:true
       },
       totalSum:{
       type:String,
       require:true
       },
       day:{
        type:String,
        require:true
       }
})
const joysOrders = mongoose.model("joysOrders",newSchema);

module.exports=joysOrders;