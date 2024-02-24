
const products=[
    {id: "1", img:'./components/img/dukeKtm250.webp', modelo:"Duke KTM 250cc", descripcion:"Moto marca Duke 250cc", valor:"5000", Cc:"250"},
    {id: "2", img:'./components/img/hondaTornado250.webp', modelo:"Honda Tornado 250cc", descripcion:"Moto marca Honda 250cc", valor:"7000", Cc:"250"},
    {id: "3", img:'./components/img/yamahaFz250.webp', modelo:"Yamaha Fz 250cc", descripcion:"Moto marca Yamaha 250cc", valor:"8000", Cc:"250"},
    {id: "4", img:'./components/img/Duke-Ktm-390.jpg', modelo:"Duke Ktm 390", descripcion:"Moto marca Duke 400cc", valor:"8000", Cc:"400"},
    {id: "5", img:'./components/img/dominar400.jpg', modelo:"Dominar 400", descripcion:"Moto marca Dominar 400cc", valor:"8000", Cc:"400"},
    {id: "6", img:'./components/img/benelli-tnt-400.webp', modelo:"Benelli TNT", descripcion:"Moto marca Benelli 400cc", valor:"8000", Cc:"400"},
    {id: "7", img:'./components/img/honda-cbr100rr-sp1.jpg', modelo:"Honda CBR1000RR SP1", descripcion:"Moto marca Honda 1000cc", valor:"8000", Cc:"1000"},
    {id: "8", img:'./components/img/Kawasaki-ZX10R-KTR.jpg', modelo:"Kawasaki ZX 10R KRT", descripcion:"Moto marca Kawasaki 1000cc", valor:"8000", Cc:"1000"},
    {id: "9", img:'./BMW-S1000XR.jpg', modelo:"BMW S 1000 XR", descripcion:"Moto marca BMW 1000cc", valor:"8000", Cc:"1000"}
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