import { Link } from 'react-router-dom'
import '../styles/main.css'



function Address(){
    return  <div className="address">
    <div className="note">
      <h3>كيف تستخدم عنوانك الصيني في التسوق</h3>
      <p>
        عند الإنتهاء من التسوق بمتاجرك المفضلة، كل ما عليك هو وضع عنوانك الصيني في خانة التوصيل في المتجر وسيقوم بإرسالها لخزانتك لدينا. و عند استلامها سنقوم بإرسال بريد لك لإعلامك بوصول شحنة لك
      </p>
    </div>
    <div className="your-address">
      <h5>Name:</h5>
      <span>first name + last name</span>          
      <h5>Address Line1:</h5>
      <span>浙江省义乌市国际商贸城五区101门5楼2街70551</span>          
      <h5>Address Line2:</h5>
      <span>浙江省义乌市国际商贸城五区101门5楼2街70551</span>          
      <h5>City:</h5>
      <span>浙江省义乌市国际商贸城五区101门5楼2街70551</span>         
      <h5>State:</h5>
      <span></span>         
      <h5>Postal Code:</h5>
      <span>xxxxxx</span>      
      <h5>Phone Number:</h5>
      <span>+86xxxxxxxxxxx</span>
    </div>
  </div>
}

export default Address