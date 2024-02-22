import'./ItemList.css'
function ItemList({Saludo}){
    
    return(
        <div className="container-itemlist">
            <h2 className="title-item">{Saludo}</h2>
        </div>
    )
}
export default ItemList;