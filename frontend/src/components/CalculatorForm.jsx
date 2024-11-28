import { Link } from 'react-router-dom'
import '../styles/main.css'




function CalculatorForm(){
    return  <div class="calculator">
            <h1>حاسبة الشحن</h1>
            <label for="" >
                <h5>المخزن</h5>
                <select name="" id="">
                    <option value="">الصين</option>
                </select>
            </label>
            
            <label for="" id="country">
                <h5>بلد الوجهة</h5>
                <select name="" id="">
                    <option value="">الجزائر</option>
                </select>
            </label>

            <label for="">
                <h5>الوزن بكيلوغرام</h5>
                <input type="number" name="" id="" min="0" placeholder="0"/>
            </label>
            
            <label for="">
                <h5>الطول</h5>
                <input type="number" name="" id="" min="0" placeholder="0"/>
            </label>

            <label for="">
                <h5>العرض</h5>
                <input type="number" name="" id="" min="0" placeholder="0"/>
            </label>

            <label for="">
                <h5>الارتفاع</h5>
                <input type="number" name="" id="" min="0" placeholder="0"/>
            </label>

            <input type="button" value="احسب التكلفة"/>
        </div>
}

export default CalculatorForm