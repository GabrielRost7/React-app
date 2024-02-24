import { useState, useEffect } from "react"
import {getProductById} from "../../AsynMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
const ItemDetailContainer=()=>{
    const [product, setproduct]=useState(null)
    useEffect(()=>{
        getProductById('1')
        .then(response=>{
            setproduct(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer 