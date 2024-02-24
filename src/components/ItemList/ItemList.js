import Item from "../ProfileCard/Item.js";
import "./itemList.css"
function ItemList({products}){


    return(
        <div className="listGroup is-flex is-justify-content-space-evenly">
            {products.map(prod=><Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList;