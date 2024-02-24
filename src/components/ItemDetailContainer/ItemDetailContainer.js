import { useState, useEffect } from "react"
import {getProductById} from "../../AsynMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer=()=>{
    const [product, setproduct]=useState(null)
    const {itemId}= useParams()
    useEffect(()=>{
        getProductById(itemId)
        .then(response=>{
            setproduct(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer 