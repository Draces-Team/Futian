import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import Steps from "../components/Steps";
function Features(){
    const [steps,setSteps] = useState([
        {title:'عنوان صيني مجاناً',body:'عند التسجيل ستحصل على عنوان صيني خاص بك مدى الحياة عنوان فرنسي فورًا.',link:'سجل الآن',href:'/register',className:'step reversed-row ',id:1},
        {title:'تجميع الشحنات مجاناً',body:'نُجمّع شحناتك في صندوق واحد مما يقلل حجم ووزن المشتريات الإجمالي ويوفّر عليك ما يصل حتى 80 بالمئة من مالك',link:'دليل التسوّق',href:'/register',className:'step',id:2},
        {title:'تخزين مجاني للمنتجات لمدة 6 أشهر',body:'عند وصول شحنتك لمستودعنا، سوف نقوم بإعلامك ووضعها بخزانتك.',link:'اقرأ المزيد',href:'/features',className:'step reversed-row',id:3},
        {title:'جمّع و اشحن مشترياتك إلى بيتك',body:'اختر من مجموعة كبيرة من طرق الشحن ووفر المال مع خدمات تجميع الشحنات، وإزالة التغليف الأصلي، وإزالة الفواتير.',link:'اقرأ المزيد',href:'/features',className:'step',id:4},
        {title:'أحصل على بضائعك بسرعة وبدون قلق',body:'ستصل مشترياتك خلال أيام قليلة، وتأكد دائما أن بورساي موجودة لتساعدك في كل خطوة في الطريق.',link:'اقرأ المزيد',href:'/features',className:'step reversed-row',id:5},
    ]);
    return <div>
        <Header></Header>
        <h1>المزايا</h1>
        <Steps steps={steps}></Steps>
        <Footer></Footer>
    </div>
}

export default Features