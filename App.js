import{BrowerRouter,Route,Routers} from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Register from './pages/Register';
import OrderForm from './pages/OrderForm';
import AdminPanel from './pages/AdminPanel';
function App(){
    return(
        <AuthProvider>
            <BrowerRouter>
            <Navbar/>
            <Routers>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/order' element={<OrderForm/>}/>
                <Route path='/admin' element={<AdminPanel/>}/>
            </Routers>
            </BrowerRouter>
        </AuthProvider>
    );
}
export default App;
//Приложение