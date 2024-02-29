import { useState, useEffect } from "react"
import {getProductById} from "../../AsynMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer=()=>{
    const [product, setproduct]=useState(null)

    const {ItemId}= useParams()
    
    useEffect(()=>{
        getProductById(ItemId)
        .then(response=>{
            setproduct(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [ItemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer 