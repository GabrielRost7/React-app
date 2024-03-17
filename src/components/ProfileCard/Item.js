import './Item.css';
import { Link } from 'react-router-dom';
function Item({id, img, modelo, descripcion, valor, Category}){  
    
    return(
        <div className="card card-container">
            <img className="card-image " src={img}/>            
            <h3 className=" is-centered modelo-moto">{modelo}</h3>
            <div className='descripcion-moto'>               
                <p className=' precio-moto'>Precio unitario: {valor}US$</p>
                <Link to={`/item/${id}`}><button className="detalle-moto option">Ver detalle</button></Link>
            </div>
                    
        </div>
    )
};

export default Item;