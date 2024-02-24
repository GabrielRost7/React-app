import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
function ItemDetail({id, img, modelo, descripcion, valor}){  
    
    return(
        <div className="card card-container-detalle">
            <img className="card-image-detalle " src={img}/>            
            <h3 className=" is-centered modelo-moto-detalle">{modelo}</h3>
            <p className="detalles-detalle">{descripcion}</p>
            <div className='descripcion-moto-detalle'>               
                <p className=' precio-moto-detalle'>Precio unitario: {valor}US$</p>
            </div>
            <div className='contador'>
                <ItemCount inicial={1} stock={10} onAdd={(cantidad)=>console.log("Cantidad agregada: ",cantidad)}/> 
            </div>        
        </div>
    )
};

export default ItemDetail;