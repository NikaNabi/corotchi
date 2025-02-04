import{useState,useContext} from 'creact';
import axios from'axios';

function Register(){
    const{login}=useContext(AuthContext);
    const[form,setForm]=useState({
        phone:'', password:''
    });
    const handleChange=async (e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    const handleSubmit= async(e)=>
        e.preventDefault();
    try{
        const res= await axios.post('http://localhost:5000/api/auth/register',form);
        alert('Регистрация успешна ');
    } catch(err){
        alert('Ошибка регистрации');
    }
};
return(
    <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="ФИО"required onChange={handleChange}/>
        <input type="text" name="phone" placeholder="+7" pattern="\\+7[0-9]{10}"required onChange={handleChange}/>
        <input type="password" name="password" placeholder="Пароль"required onChange={handleChange}/>
        <button type='submit'>Зарегистрироваться</button>
    </form>
);}
export default Register
//Регистрация