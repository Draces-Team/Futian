import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"
function Login(){
    return <div className="sign">
            <img src="../../public/img/logo/Logo.svg" alt="Futian"/>
            <h2>تسجيل الدخول</h2>
            <LoginForm route='/api/token/' method='login'></LoginForm>
            <Link to="/forgeten-passoword">هل نسيت كلمة المرور؟</Link>
            <Link to="/register">انشاء حساب</Link>

        </div>
}

export default Login