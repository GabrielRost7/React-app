import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../servicesFirebase/firebaseConfig"

const ItemDetailContainer=()=>{
    const [product, setProduct]=useState(null)
    const [loading, setLoading]=useState(true)

    const {ItemId}= useParams()
    
    useEffect(()=>{
        setLoading(true)
        const docRef=doc(db, 'Items', ItemId)

        getDoc(docRef)
        .then(response=>{
            const data=response.data()
            const productAdapted= {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, [ItemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer 