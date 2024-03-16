import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";

const Cart=()=>{
    const {cart, clearCart, totalQuantity}=useContext(CartContext)
    const total = cart.reduce((acc, item) => acc + (item.quantity * item.valor), 0);

    if(totalQuantity===0){
        return(
            <div className='container-lista'>
                <h2>No hay nada en el carrito!</h2>
                <Link to='/' className='' >Productos</Link>
            </div>
        )
    }
    return(
        <div className='container-lista'>
            <div className='productos-carro'>{cart.map(p=><CartItem key={p.id}{...p}/>)}</div>
            <h3>Total: ${total}</h3>
            <button onClick={()=>clearCart()} className='boton-limpiar'>Limpiar carrito</button>
            <Link to='/checkout' className='checkout-carrito'>Checkout</Link>
        </div>
    )
}

export default Cart