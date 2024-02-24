import { useState } from 'react';
import './ItemCount.css';
function ItemCount({inicial, stock, onAdd}){

    const[cantidad, setCantidad]=useState(inicial);
    
    function sacarCarrito(){
        if(cantidad>0){
            setCantidad(cantidad-1)
        }       
    }
    function sumarCarrito(){
        if (cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
    

    return(
        <div className='Container-carrito'>
            <div className='sumar-carro'>
                <button onClick={sacarCarrito}>-</button>           
                <p className='contador-carrito'>{cantidad}</p>
                <button onClick={sumarCarrito}>+</button>
            </div>
            <div className='agregar-carrito'>
                <button onClick={()=>onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;