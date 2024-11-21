import { Link } from 'react-router-dom'
import '../styles/main.css'



function AddressStikcers(){
    return  <div className="address">
    <div className="note">
      <h3>عنوان المنزل</h3>
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
    <div>
        <button>تعديل</button>
        <button>حذف</button>
    </div>
  </div>
}

export default AddressStikcers