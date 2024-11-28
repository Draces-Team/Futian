import Header from "../components/Header"
import Footer from "../components/Footer"
import Features1 from "../components/Features1"
import { useState } from "react"
function BuyForMe(){
    const [features,setFeatures] = useState([
        {img:'../../public/img/icons/mailbox.svg',alt:'mailbox',head:'اختر منتجك الذي تحبه',body:'اختر المنتج الذي تريده من أي متجر أو أي موقع تسوق صيني على الإنترنت.', id:1},
        {img:'../../public/img/icons/mailbox.svg',alt:'mailbox',head:'قم بإضافة شحناتك عبر النموذج',body:'أضف روابط المنتجات التي حددتها والميزات التي تريدها (اللون والحجم والكمية و..) إلى الحقول الموجودة بأسفل الصفحة', id:2},
        {img:'../../public/img/icons/mailbox.svg',alt:'mailbox',head:'نتسوّق لك',body:'اختر المنتج دع فريق فوتيان يشتري المنتج لك، نعم، الأمر بهذه السهولة!', id:3},
        
    ])
    return <div>
    <Header></Header>
    <main className="buy-for-me">
        <h1>خدمة المتسوّق الشخصي</h1>
        <h2>نتسوق نيابة عنك، ونشتري منتجاتك التي تبحث عنها، ونرسلها إلى مستودعاتنا.</h2>
        <h2>كما نضيفها إلى حسابك حتى تتمكن من شحنه إلى أي بلد تريده.</h2>
        <Features1 features={features}></Features1>
        <h1>لماذا يحتاج بعض العملاء هذه الخدمة؟</h1>

    </main>
    <Footer></Footer>

</div>
}

export default BuyForMe