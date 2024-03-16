import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Style.css/App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CardContext.js";



function App(){
    return( 
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element=
                            {<div className="hero is-dark">
                            <ItemListContainer Saludo={"Bienvenidos a la página de Motocompras!"}/></div>}/>
                        <Route path="/category/:categoryId" element=
                            {<ItemListContainer/>}/>  
                        <Route path="/Item/:ItemId" element=
                            {<div><section className="is-flex is-justify-content-center detail-item">
                            <ItemDetailContainer/></section></div>}/> 
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>                          
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>    
    ) 
}




export default App;