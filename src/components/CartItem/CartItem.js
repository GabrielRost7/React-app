import { useContext } from "react";
import { CartContext } from "../../context/CardContext";

const CartItem=({modelo, quantity, valor, id})=>{
    const {removeItem}=useContext(CartContext)
    const subtotal = quantity * valor;
    return(
        <div>
            <h2>{modelo}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${subtotal}</p>
            <button onClick={()=>removeItem(id)}>Eliminar</button>
        </div>
    )
}
export default CartItem