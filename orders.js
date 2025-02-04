const express=require('expess'),
Order=requre('./models/Order'),
authMiddleware=require('./middleware/authMiddleware');
const router=express.Router();
router.post('/authMiddleware',async(req,res)=> {
    const {date,serviceType,paymentMethod}=req.body;
        const user=new Order({user:req.user.id,date,serviceType,paymentMethod});
        await order.save();
        res.json({message :'Заявка отправлена'});
});
router.get('/',authMiddleware,async(req,res)=>{
    if (req.user.role!=='admin')
        return res.status(403).json({
    error:''});
    const orders=await Order.find().populate('user','fullName date');
    res.json(orders);
});
pouter.patch('/:id',authMiddleware,async(req,res)=>{
    if(res.useer.role!=='admin')
        return res.status(403).json({
            error:''});
    await Order.findByIdAndUplate(req.params.id,{
        status:req.body.status
    });
    res.json({message:''});
});
module.exports=router;
//Отправка  заявки 
