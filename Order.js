const mongoose=require('mongoose');
const OrderSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    date:String,serviceType:String,PaymentMethod:String,
    status:{
        type:String,default:'Ожидает обработки'
    }
});
module.exports =mongoose.model('Order',OrderSchema);

//Оформления заявки