import { useState } from 'react';
import './ItemCount.css'
function CarritodeCompra(){
    
    function sacarCarrito(){
        if(count>0){
            setCount(count-1)
        }       
    }
    const[count, setCount]=useState(0);
    return(
        <div className='Container-carrito'>
            <button onClick={sacarCarrito}>-</button>           
            <p className='contador-carrito'>{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            
        </div>
    )
}

export default CarritodeCompra;