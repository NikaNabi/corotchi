require('dotenv').config();
const express=require('express'),
mongoose=require('mongoose'),
cors=require('cors');
const authRoutes =require('./routes/auth'),
orderRoutes=require('./routes/orders');
const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DB_URL).then(()=>
console.log('MongoDB подключена'));
app.use('./api/auth',authRoutes);
app.use('./api/orders',orderRoutes);
app.listen(5000,()=>
console.log('Сервер запущен на 5000'));

//Запуск сервера