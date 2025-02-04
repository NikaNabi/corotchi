const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    fullName:String,
    phone:{
        type:String,unique:true
    },
    password:String, 
    role:{type:String,default:'user'}
});
module.exports=mongoose.modul('User',UserSchema);

//Регистрация пользователя