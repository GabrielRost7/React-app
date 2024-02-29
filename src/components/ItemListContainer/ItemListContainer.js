import './ItemListContainer.css';
import { getProducts, getProductByCategory } from '../../AsynMock';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer({ Saludo }) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.log(error);
            });

    }, [categoryId]);

    // Función para dividir los productos en grupos de tres
    const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    // Dividir los productos en grupos de tres
    const groupedProducts = chunkArray(products, 3);

    return (
        <div>
            <div className="container-itemlist">
                <h2 className="title-item">{Saludo}</h2>
            </div>
            {/* Renderizar los grupos de productos en divisiones diferentes */}
            {groupedProducts.map((group, index) => (
                <div key={index} className='producto-itemlist'>
                    <ItemList products={group} />
                </div>
            ))}
        </div>
    );
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
