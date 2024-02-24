import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "bulma/css/bulma.css";
import "./Style.css/App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";





function App(){
    return( 
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element=
                        {<div className="hero is-dark">
                        <ItemListContainer Saludo={"Bienvenidos a la página de Motocompras!"}/></div>}
                    />
                    <Route path="/Category/:CategoryCc" element=
                        {<ItemListContainer></ItemListContainer>}
                    />  
                    <Route path="/Item/:ItemId" element=
                    {<div><section className="is-flex is-justify-content-center detail-item">
                        <ItemDetailContainer/></section></div>}
                    /> 
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>  
                    
                </Routes>
            </BrowserRouter>
        </div>    
    ) 
}




export default App;