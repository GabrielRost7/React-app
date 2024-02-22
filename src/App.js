import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemListContainer/ItemList";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Duke250Img from "./components/ProfileCard/img/dukeKtm250.webp";
import Honda250Img from "./components/ProfileCard/img/hondaTornado250.webp";
import Yamaha250Img from "./components/ProfileCard/img/yamahaFz250.webp";
import "bulma/css/bulma.css";
import "./Style.css/App.css"


function App(){
    return( 
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="hero is-dark">
                <ItemList Saludo={"Bienvenidos a la página de Motocompras!"}/>
            </div>

            <div>  
                <section className="is-flex is-justify-content-space-around">
                    <div >
                        <ProfileCard imagen={Honda250Img} modelo="Honda Tornado 250cc" descripcion="..." valor="5000"/>
                    </div>
                    <div >
                        <ProfileCard imagen={Duke250Img} modelo="Duke KTM 250cc" descripcion="..." valor="7000"/>
                    </div> 
                    <div >
                        <ProfileCard imagen={Yamaha250Img} modelo="Yamaha Fz 250cc" descripcion="..." valor="6000"/>
                    </div>                                                                   
                </section> 
            </div>
        </div>    
    ) 
}




export default App;