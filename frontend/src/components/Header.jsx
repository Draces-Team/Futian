import { Link } from 'react-router-dom'
import '../styles/main.css'


function Header(){
    return     <header>
    <div className="buttons">
        <Link to="/login"> تسجيل الدخول </Link>
        <Link to="/register">انشاء حساب</Link>
    </div>  
    <ul>
        <li><Link to="/features">المزايا</Link></li>
        <li><Link to="/howItWork">كيف نعمل؟</Link></li>
        <li><Link to="/stores">التسوق الشخصي</Link></li>
        <li><Link to="/calculator">تكلفة الشحنة</Link></li>
    </ul>
    <img src="../../public/img/logo/Logo.svg" alt="Futian"/>
</header>
}

export default Header