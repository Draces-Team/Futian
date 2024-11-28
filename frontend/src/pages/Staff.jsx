import LoginForm from "../components/LoginForm"

function Staff(){
    return <div className="sign">
            <img src="../../public/img/logo/Logo.svg" alt="Futian"/>
            <h2>تسجيل الدخول</h2>
            <LoginForm route='/admin' method='adminstration'></LoginForm>
            <Link to="/forgeten-passoword">هل نسيت كلمة المرور؟</Link>
            <Link to="/register">انشاء حساب</Link>

        </div>
}

export default Staff