import Carrito from "./assets/CarritoReact.png" 
import "./CartWidget.css"
function CartWidget(){
    let contador= "mi cardwidget?"

    return(
        <div>
            <button className="boton-carrito">
            <img src={Carrito} alt="Carrito"/>
            {0}
            </button>
        </div>
    )
}
export default CartWidget;