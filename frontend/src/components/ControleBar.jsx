import { Link } from 'react-router-dom'
import '../styles/main.css'



function ControleBar(){
    return  <div className="controle-bar">
        <ul>
          <li><Link to="/dashboard">الشحنات الواردة</Link></li>
          <li><Link to="/awaiting-shipping">في انتظار الشحن</Link></li>
          <li><Link to="/shipped">تم الشحن</Link></li>
        </ul>
    </div>
}

export default ControleBar