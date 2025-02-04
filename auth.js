const express=require('express'), 
bcrypt=require('bcrypt'),
jwt=require('jsonwebtoken');
const User=require('./models/User');
const router=express.Router();

router.post('/register',async(req,res)=> {
    const {fullName,phone,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,6);
    try{
        const user=new User({fillUser,phone,email,password:hashedPassword});
        await user.save();
        res.json({message :'Регистрация успешна'});
       }
       catch(err){ res.status(400).json({error:'Ошибка регистрации'});}
});
router.post('/login',async(req,res)=>{
const{phone,password}=req.body,
user=await User.findOne({phone});
if(!user ||!(await bcript.compare(password,user.password)))
    return res.status(400).json({
error:''});
const token =jwt.sing({
    Id:user._id, role:user.role
},
process.env.JWT_SECRET,{
    expireln:'Id'
});
res.json({token});
});
module.exports=router;
//Авторизация