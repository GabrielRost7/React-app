
const products=[
    {id: "1", img:'./img/dukeKtm250.webp', modelo:"Duke KTM 250cc", descripcion:"Moto marca Duke 250cc", valor:"8000", category:'250'},
    {id: "2", img:'./img/hondaTornado250.webp', modelo:"Honda Tornado 250cc", descripcion:"Moto marca Honda 250cc", valor:"7000", category:'250'},
    {id: "3", img:'./img/yamahaFz250.webp', modelo:"Yamaha Fz 250cc", descripcion:"Moto marca Yamaha 250cc", valor:"5000", category:'250'},
    {id: "4", img:'./img/Duke-Ktm-390.jpg', modelo:"Duke Ktm 390", descripcion:"Moto marca Duke 400cc", valor:"10000", category:'400'},
    {id: "5", img:'./img/dominar400.jpg', modelo:"Dominar 400", descripcion:"Moto marca Dominar 400cc", valor:"6800", category:'400'},
    {id: "6", img:"./img/benelli-tnt-400.webp", modelo:"Benelli TNT", descripcion:"Moto marca Benelli 400cc", valor:"8000", category:'400'},
    {id: "7", img:'./img/honda1000.jpg', modelo:"Honda CBR1000RR SP1", descripcion:"Moto marca Honda 1000cc", valor:"40000", category:'1000'},
    {id: "8", img:'./img/Kawasaki1000.jpg', modelo:"Kawasaki ZX 10R KRT", descripcion:"Moto marca Kawasaki 1000cc", valor:"42000", category:'1000'},
    {id: "9", img:'./img/BMW-S1000XR.jpg', modelo:"BMW S 1000 XR", descripcion:"Moto marca BMW 1000cc", valor:"45000", category:'1000'}
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
export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory));
        }, 500);
    });
};
export default getProducts