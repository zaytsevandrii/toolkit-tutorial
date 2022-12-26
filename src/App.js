import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import { getCartItems } from "./features/cart/cartSlice"


function App() {
    const {isLodaing} =useSelector(store=>store.cart)
    const {isOpen}=useSelector(state=>state.modal)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getCartItems())
    },[])

    if(isLodaing){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <main>
            {isOpen&&<Modal/>}
            <Navbar/>
            <CartContainer/>
        </main>
    )
}

export default App
