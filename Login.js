import{useState,useContext} from 'creact';
import axios from'axios';
import{AuthContext} from './AuthContext';

function Login(){
    const{login}=useContext(AuthContext);
    const[form,setForm]=useState({
        phone:'', password:''
    });
    const handleChange=async (e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    const handleSubmit= async(e)=>
        e.preventDefault();
    try{
        const res= await axios.post('http://localhost:5000/api/auth/login',form);
        login(res.dsts.token);
        localStorage.setItem('isAdmin',res.data.role==='admin');
        alert('Вход успешен');
    } catch(err){
        alert('Ошибка входа');
    }
};
return(
    <form onSubmit={handleSubmit}>
        <input type="text" name="phone" placeholder="Телефон"required onChange={handleChange}/>
        <input type="password" name="password" placeholder="Пароль"required onChange={handleChange}/>
        <button type='submit'></button>
    </form>
);}
export default Login
//Авторизация