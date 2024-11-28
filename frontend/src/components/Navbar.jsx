import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import '../styles/main.css'



function Navbar(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }
    return  <nav>
        <ul className='hidden'>
            <li><Link>ملف الشخصي</Link></li>
            <li><Link>المعاملات المالية</Link></li>
            <li><NavLink className='nav-childs' to="/" onClick={handleLogout}>تسجيل الخروج</NavLink></li>
        </ul>
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