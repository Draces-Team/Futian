import { Link } from 'react-router-dom'
import '../styles/main.css'



const Bundle=(props)=>{
    const bundles = props.bundles
    const img = props.img
    const title = props.title
    const quantite = props.quantite
    const price = props.price
    const order_status = props.order_status
    const shipment_price = props.shipment_price
    const btn = props.btn
    return  bundles.map((bundle)=>(
      <div className="item" key={bundle.id}>
        <img src={bundle.img} alt="product-pic" />
        <p>{bundle.title}</p>
        <p>{bundle.quantite}</p>
        <p>{bundle.price}</p>
        <p>{bundle.order_status}</p>
        <Link to=''>{bundle.btn}</Link>
      </div>
    ))
}

export default Bundle