import Duke250Img from "./components/img/dukeKtm250.webp";
import Honda250Img from "./components/ProfileCard/img/hondaTornado250.webp";
import Yamaha250Img from "./components/ProfileCard/img/yamahaFz250.webp";

const products=[
    {id: "1", img:'https://github.com/GabrielRost7/React-app/blob/master/src/components/ProfileCard/img/dukeKtm250.webp', modelo:"Honda Tornado 250cc", descripcion:"Moto marca Honda 250cc", valor:"5000"},
    {id: "2", img:'./components/img/dukeKtm250.webp', modelo:"Duke KTM 250cc", descripcion:"...", valor:"7000"},
    {id: "3", img:'./components/ProfileCard/img/yamahaFz250.webp', modelo:"Yamaha Fz 250cc", descripcion:"...", valor:"8000"},
    {id: "3", img:'./components/ProfileCard/img/yamahaFz250.webp', modelo:"Yamaha Fz 250cc", descripcion:"...", valor:"8000"},
    {id: "3", img:'./components/ProfileCard/img/yamahaFz250.webp', modelo:"Yamaha Fz 250cc", descripcion:"...", valor:"8000"},
    {id: "3", img:'./components/ProfileCard/img/yamahaFz250.webp', modelo:"Yamaha Fz 250cc", descripcion:"...", valor:"8000"}
]
export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}
export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
        },500)
    })
}
export default getProducts