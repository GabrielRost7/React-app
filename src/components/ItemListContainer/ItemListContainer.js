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
    const productsFirstRange = products.filter(prod => parseInt(prod.id) >= 1 && parseInt(prod.id) <= 3);
    const productsSecondRange = products.filter(prod => parseInt(prod.id) >= 4 && parseInt(prod.id) <= 6);
    const productsThirdRange = products.filter(prod => parseInt(prod.id) >= 7 && parseInt(prod.id) <= 9);
    
    return(
        <div>
            <div className="container-itemlist">
                <h2 className="title-item">{Saludo}</h2>
            </div>
            <div className='producto-itemlist'>
                <ItemList products={productsFirstRange}/>
            </div>
            <div className='producto-itemlist'>
                <ItemList products={productsSecondRange}/>
            </div>
            <div className='producto-itemlist'>
                <ItemList products={productsThirdRange}/>
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
