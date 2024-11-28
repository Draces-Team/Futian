import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
function NotFound(){
    return <div>
        <Header></Header>
        <div className="not-found">
            <div className="error">
                <img src="../../public/img/404.svg" alt="not found" />
                <h1>404</h1>
            </div>
            <h2>لُطفًا! الصفحة التي تبحث عنها غير موجودة</h2>
            <Link to="/">عودة الى الصفحة الرئيسية</Link>
        </div>
        <Footer></Footer>
    </div>
}

export default NotFound