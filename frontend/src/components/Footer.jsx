import { Link } from 'react-router-dom'
import '../styles/main.css'



function Footer(){
    return     <footer>
    <div className="h-line"></div>
    <div className="sections">
    <div className="ft-section">
        <img src="../../public/img/logo/Logo.svg" alt="Futian"/>
        <p>تسوق من المنصات والمتاجر الصينية واشحن عبر الانترنت إلى جميع أنحاء العالم.</p>
        <p> فوتيان هي خدمة شحن الطرود والتسوق أونلاين، مع مميزات 6 أشهر من التخزين المجاني، بدون تكاليف مخفية والاشتراكات المكلفة، وأفضل أسعار الشحن الأرخص في السوق.</p>
        <div className="social-media">
            <Link to=""><img src="../../public/img/social-media/facebook.svg" alt="Facebook"/></Link>
            <Link to=""><img src="../../public/img/social-media/instagram.svg" alt="Instagram"/></Link>
            <Link to=""><img src="../../public/img/social-media/twitter.svg" alt="X"/></Link>
        </div>
    </div>
    <div className="ft-section">
        <h3>روابط</h3>
        <ul>
            <li><Link to="/faqs">الأسئلة الشائعة</Link></li>
            <li><Link to="">تواصل معنا</Link></li>
            <li><Link to="/calculator">حاسبة تكلفة الشحن</Link></li>
            <li><Link to="">الشحن للدول العربية</Link></li>
        </ul>     
    </div>
    <div className="ft-section">
        <h3>البنود</h3>
        <ul>
            <li><Link to="/banned-material">المواد المحظورة</Link></li>
            <li><Link to="">شروط الاستخدام</Link></li>
            <li><Link to="/terms-and-conditions">الخصوصية وسياسة الاستخدام</Link></li>
        </ul>
    </div>
</div>
<div className="copywrite">
    <h5>جميع الحقوق محفوظة © 2024 لشركة فوتيان</h5>
</div>
</footer>
}

export default Footer