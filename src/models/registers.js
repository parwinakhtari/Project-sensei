const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
    company:{
        type:String,
    },
    experience:{
        type:Number
    }

})

const docobject=new mongoose.model("Register",userSchema);
module.exports=docobject;