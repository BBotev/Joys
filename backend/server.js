const express = require("express");
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://myDb:B123456b@cluster0.lgscg6r.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
console.log('mongodb connected')
})
.catch(()=>{
    console.log('failed')
})
const joysUsers = require("./mongodbUsers");
const joysOrders = require("./mongodbOrders");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login",async(req,res)=>{
    
    const {account,password}=req.body

    try{
        const check = await joysUsers.findOne({account:account,password:password})
        if(check){
            res.json({status: 'exist', name: check.firstName, id:check._id, gender:check.gender})
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/signup",async(req,res)=>{
   
    const {firstName,secondName,phone,account,password,email,gender,admin}=req.body

    const data={
        firstName:firstName,
        secondName:secondName,
        phone:phone,
        account:account,
        password:password,
        email:email,
        gender:gender,
        admin:admin
    }

    try{
        const check = await joysUsers.findOne({account:account})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await joysUsers.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/orders",async(req,res)=>{ 
    const {orderText,id,sum} = req.body;
    const check = await joysUsers.findOne({_id:id});
    const date = new Date();
    const data = {
        User_id:id,
        name:check.firstName,
        status:1,
        date: date.getFullYear()+'-'+("0"+(date.getMonth()+1)).slice(-2)+'-'+
        ("0"+(date.getDate())).slice(-2)+'-'+date.getHours()+':'+("0"+(date.getMinutes())).slice(-2),
        email:check.email,
        phone:check.phone,
        products:orderText,
        totalSum:sum
    }
 
    try {
        const check = await joysUsers.findOne({_id:id});
        if(check){
                   await joysOrders.insertMany([data]);  
                   res.json("exist")          
        }
    
    } catch (error) {
        res.json("notexist")
    }
  })

app.post("/getorders",async (req,res)=>{
   
const currentUser = req.body
   const allOrders = await joysOrders.find({User_id:currentUser.id});
    try {      
       if(allOrders){    
        res.json(allOrders)        
   }
} catch (error) {
 res.json("notexist")
  } 

})

app.listen(8000,()=>{
    console.log("server connected");
})