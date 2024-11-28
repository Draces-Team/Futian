import { Link } from 'react-router-dom'
import '../styles/main.css'



function PaymentMethods(){
    return <div class="payment_methods">
    <h2>طرق الدفع</h2>
    <div class="logo-brands">
        <img src="../../public/img/brands/payment/mastercard-svgrepo-com.svg" alt="Mastercard"/>
       
        <img src="../../public/img/brands/payment/visa-svgrepo-com.svg" alt="Visa"/>
    
    </div>
    </div>
}

export default PaymentMethods
