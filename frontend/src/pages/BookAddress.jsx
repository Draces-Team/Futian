import ControleBar from "../components/ControleBar"
import Navbar from "../components/Navbar"
import AddressStickers from "../components/AddressStickers"
function BookAddress(){
    return <div>
    <Navbar></Navbar>
    <div className="book-address">
        <AddressStickers></AddressStickers>
        <AddressStickers></AddressStickers>
        <AddressStickers></AddressStickers>
        <AddressStickers></AddressStickers>
        <AddressStickers></AddressStickers>
        <AddressStickers></AddressStickers>
        <AddressStickers></AddressStickers>
    </div>
</div>
}

export default BookAddress