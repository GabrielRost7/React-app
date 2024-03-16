import Carrito from "./assets/CarritoReact.png" 
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import { Link } from "react-router-dom";

function CartWidget(){
    const{totalQuantity}=useContext(CartContext)

    return(
        <Link to='/cart' style={{display: totalQuantity>0? 'flex':'none'}}>
            <button className="boton-carrito">
            <img src={Carrito} alt="Carrito"/>
            {totalQuantity}
            </button>
        </Link>
    )
}
export default CartWidget;