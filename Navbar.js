import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from '../AuthContext';
function Navbar(){
    const {token,logout}=useContext(AuthContext),
    isAdmin = localStorage.getItem('isAdmin')==='true';
    return(
        <nav>
            <Link to="/">Главная</Link>
            {token? (<><Link to="/order">Заявка</Link>
            {isAdmin&&<Link to="/admin">Админ</Link>}
            <buttom onClick={logout}>Выйти</buttom></>):
            (<><Link to="/login">Войти</Link>
            <Link to="/register">Зарегистрироваться</Link></>)}
        </nav>
    );
}
//Навигация