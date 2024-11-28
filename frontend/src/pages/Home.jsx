import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Stores from "../components/Stores"
import CallToAction from "../components/CallToAction"
import PaymentMethods from "../components/PaymentMethods"
import Partners from "../components/Partners"
import Features1 from "../components/Features1"
import Features2 from "../components/Features2"
import Faq1 from "../components/Faq1"
import { useState } from "react"
function Home(){
    const [features,setFeatures] = useState([
        {img:'../../public/img/icons/mailbox.svg',alt:'mailbox',head:'سجِّل واِحصل على عنوانك الصيني',body:'سجِّل في ثوانٍ واِحصل على عنوانك الفرنسي فور تسجيلك.', id:1},
        {img:'../../public/img/icons/shopping.svg',alt:'shopping',head:'تسوّق من أي متجر تحبّه',body:'تسوق من متاجرك المفضلة واشحن مشترياتك إلى عنوانك الصيني.', id:2},
        {img:'../../public/img/icons/box.svg',alt:'box',head:'جمّع مشترياتك في شُحنة واحدة',body:'وفق طلبك، سنُجمِّع مشترياتك ونغلّفها ونشحنها للعنوان الذي تحدده..', id:3}
    ])
    return <div>
        <Header></Header>
        <Hero></Hero>
        <Stores></Stores>
        <Features1 features={features}></Features1>
        <Features2></Features2>
        <Partners></Partners>
        <PaymentMethods></PaymentMethods>
        <Faq1></Faq1>
        <CallToAction></CallToAction>
        <Footer></Footer>
    </div>
}

export default Home