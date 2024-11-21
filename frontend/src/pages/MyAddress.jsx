import Address from "../components/address"
import Closet from "../components/Closet"
import ControleBar from "../components/ControleBar"
import Navbar from "../components/Navbar"
function MyAddress(){
    return <div>
        <Navbar></Navbar>
        <div className="home">
            <Closet></Closet>
            <Address></Address>
        </div>
    </div>
}

export default MyAddress