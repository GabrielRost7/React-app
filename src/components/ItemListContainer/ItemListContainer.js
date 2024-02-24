import'./ItemListContainer.css';
import {getProducts} from '../../AsynMock';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
function ItemListContainer({Saludo}){

    const [products, setProducts]=useState([])
    useEffect(()=>{
        getProducts()
        .then(response=>{
            setProducts(response)
        })
        .catch(error=>{
            console.log(error)
        })
    
    })
    
    return(
        <div>
            <div className="container-itemlist">
                <h2 className="title-item">{Saludo}</h2>
            </div>
            <div className='producto-itemlist'>
                <ItemList products={products}/>
            </div>
        </div>
    )
}
export default ItemListContainer;





















/*
import'./ItemList.css'
import { useState, useEffect } from 'react';
import { getProducts } from '../../AsynMock.js';



function ItemList({Saludo}){
    const [products, setProducts]=useState([])
    useEffect(()=>{
        getProducts()
        .then(response=>{
            setProducts(response)
        })
        .catch(error=>{
            console.log(error)
        })
    })

    return(
        <div className="container-itemlist">
            <h2 className="title-item">{Saludo}</h2> 
            <section className="Container-Principal">
                <ItemList products={products}/>                                                           
            </section>                      
        </div>
    )
}
export default ItemList;
*/
