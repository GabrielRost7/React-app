import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CardContext";

function ItemDetail({ id, img, modelo, descripcion, valor, Category, stock }) {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const {addItem}= useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item={
            id, modelo, valor
        }
        addItem(item, quantity)
    }

    return (
        <div className="card card-container-detalle">
            <img className="card-image-detalle " src={"." + img} />
            <h3 className=" is-centered modelo-moto-detalle">{modelo}</h3>
            <p className="detalles-detalle">{descripcion}</p>
            <div className='descripcion-moto-detalle'>
                <p className=' precio-moto-detalle'>Precio unitario: {valor}US$</p>
            </div>
            <div className='contador'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Opcion-terminar">Terminar compra</Link>
                    ) : (
                        <ItemCount inicial={1} stock={10} onAdd={handleOnAdd} />
                    )
                }
            </div>
           
        </div>
    )
};

export default ItemDetail;