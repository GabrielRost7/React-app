import './ProfileCard.css';
import CarritodeCompra from '../ItemCount/ItemCount';
function ProfileCard({imagen, modelo, descripcion, valor}){   
    return(
        <div className="card card-container">
            <img className="card-image " src={imagen}/>
            <h3 className=" is-centered modelo-moto">{modelo}</h3>
            <p className=" descripcion-moto">{descripcion}</p>
            <div className='detalle-moto'>
                <p className='detalle-moto-precio'>Precio unitario: {valor}US$</p>
                <CarritodeCompra/>
            </div>
        </div>
    )
};

export default ProfileCard;