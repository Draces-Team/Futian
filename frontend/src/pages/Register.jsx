import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"

function Register(){
    return <div className="sign">
            <img src="../../public/img/logo/Logo.svg" alt="Futian"/>
            <h2>انشاء حساب</h2>
            <LoginForm route='/api/user/register/' method='register'></LoginForm>
            <Link to="/forgeten-passoword">هل نسيت كلمة المرور؟</Link>
            <Link to="/register">انشاء حساب</Link>

        </div>
}

export default Register