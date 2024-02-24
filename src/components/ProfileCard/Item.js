import './Item.css';

function Item({id, img, modelo, descripcion, valor}){  
    
    return(
        <div className="card card-container">
            <img className="card-image " src={img}/>
            
            <h3 className=" is-centered modelo-moto">{modelo}</h3>
            <div className='descripcion-moto'>               
                <p className=' precio-moto'>Precio unitario: {valor}US$</p>
                <button className="detalle-moto option">Ver detalle</button>
            </div>
                    
        </div>
    )
};

export default Item;