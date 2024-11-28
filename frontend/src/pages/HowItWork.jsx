import Header from "../components/Header"
import Footer from "../components/Footer"
import Steps from "../components/Steps"
import { useState } from "react"
function HowItWork(){
    const [steps,setSteps] = useState([
        {title:'سجّل لتحصل على عنوانك الفرنسي المجاني',body:'سجل معنا بسهولة من خلال نموذج التسجيل الإلكتروني واحصل على عنوان فرنسي فورًا.',link:'سجل الآن',href:'/register',className:'step reversed-row ',id:1},
        {title:'ابدء التسوق من المتاجر الفرنسية والأوربية',body:'تسوق عبر الإنترنت من مجموعة كبيرة من المنتجات والعلامات التجارية الفرنسية والأوروبية باستخدام عنوانك الفرنسي..',link:'دليل التسوّق',href:'/register',className:'step',id:2},
        {title:'اشحن إلينا ونحن نَستلِم مشترياتك',body:'عند وصول شحنتك لمستودعنا، سوف نقوم بإعلامك ووضعها بخزانتك.',link:'اقرأ المزيد',href:'/features',className:'step reversed-row',id:3},
        {title:'جمّع و اشحن مشترياتك إلى بيتك',body:'اختر من مجموعة كبيرة من طرق الشحن ووفر المال مع خدمات تجميع الشحنات، وإزالة التغليف الأصلي، وإزالة الفواتير.',link:'اقرأ المزيد',href:'/features',className:'step',id:4},
        {title:'أحصل على بضائعك بسرعة وبدون قلق',body:'ستصل مشترياتك خلال أيام قليلة، وتأكد دائما أن بورساي موجودة لتساعدك في كل خطوة في الطريق.',link:'اقرأ المزيد',href:'/features',className:'step reversed-row',id:5},
    ]);
    return <div>
        <Header></Header>
        <main className="how-it-work">
        <h1>كيف تعمل فوتيان؟</h1>
        <h3>في 5 خطوات سهلة ستتعلم كيف تنشئ حسابك وتبدء بالتسوّق والاستفادة من مميزاتنا</h3>
        <Steps steps={steps}/>
        </main>
        <Footer></Footer>
    </div>
}

export default HowItWork