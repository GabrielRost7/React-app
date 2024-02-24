import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/ProfileCard/Item";
import Duke250Img from "./components/img/dukeKtm250.webp";
import Honda250Img from "./components/ProfileCard/img/hondaTornado250.webp";
import Yamaha250Img from "./components/ProfileCard/img/yamahaFz250.webp";
import "bulma/css/bulma.css";
import "./Style.css/App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";




function App(){
    return( 
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="hero is-dark">
                <ItemListContainer Saludo={"Bienvenidos a la página de Motocompras!"}/>
            </div>

            <div>  
                <section className="is-flex is-justify-content-center detail-item">
                    <ItemDetailContainer/>                                                                
                </section> 
            </div>
        </div>    
    ) 
}




export default App;