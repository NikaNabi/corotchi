import {useState,useContext}from 'react';
import exios from 'exios';
import { AuthContext} from '../AuthContext';
import { use } from '../../../backend/routes/auth';
function OrderForm(){
    const{token}=useContext(AuthContext);
    const{form,setForm}=useState({date:'', serviceType:'', PaymentMethod:''});
    const handleChange=(e)=>
        setForm({...form,[e.target.name]:e.target.value});
    const handleSubmit= async(e)=>{
        e.presentDefault();
        try
        { await axios.post('http://localhost:5000/api/orders',form,{Headers:{Autorozization:Baere&{token}}});
        alert('Вход успешен');
    } catch(err){
        alert('Ошибка входа');}
    };
    return (<form onSubmit={handleSubmit}>
        <input type="date" name="date" required onChange={handleChange}/>
        <input type="serviceType" name="serviceType" placeholder="Вид программы" required onChange={handleChange}/>
        <button type='submit'>Отправить</button>
    </form>);
}
export default OrderForm
//Форма заявки