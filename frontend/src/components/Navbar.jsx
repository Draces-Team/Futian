import { Link } from 'react-router-dom'
import '../styles/main.css'



function Navbar(){
    return  <nav>
        <div className="buttons">
            <button><img src="../../public/img/icons/bell-solid.svg" alt=""/></button>
            <button><img src="../../public/img/icons/circle-user-solid.svg" alt=""/></button>
        </div>  
        <ul>
            <li><Link to="/myaddress">عنواني</Link></li>
            <li><Link to="/calculator">تكلفة الشحنة</Link></li>
            <li><Link to="/myaddressbook">عناوني</Link></li>
            <li><Link to="/dashboard">الخزانة</Link></li>
        </ul>
        <img src="../../public/img/logo/Logo.svg" alt="Futian"/>
    </nav>
}

export default Navbar