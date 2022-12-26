import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotals, clearCart } from "../features/cart/cartSlice"
import { openModal } from "../features/cart/modalSlice"
import CartItem from "./CartItem"

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((state) => state.cart)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(calculateTotals())
    },[cartItems])
    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={()=>dispatch(openModal())}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
