import ControleBar from "../components/ControleBar"
import Navbar from "../components/Navbar"
import Bundle from "../components/Bundle"
import { useState } from "react"
function Shipped(){
    const [bundles,setBundles] = useState([
        {img:'',title:'',quantite:'',price:0,order_status:'',shipment_price:0,id:1}
    ])
    return <div>
    <Navbar></Navbar>
    <ControleBar></ControleBar>
    <div className="items">
    <div className="item">
        <p>صورة</p>
        <p>اسم المنتوج</p>
        <p>الكمية</p>
        <p>سعر</p>
        <p>الحالة</p>
        <p>سعر الشحن</p>
        </div>
        <Bundle bundles={bundles}></Bundle>
    </div>
</div>
}

export default Shipped