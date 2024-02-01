import NavBar from "./components/NavBar";
import ItemList from "./components/ItemListContainer/ItemList";
import ProfileCard from "./components/ProfileCard";
import DukeImg from "./img/dukeKtm250.webp";
import HondaImg from "./img/hondaTornado250.webp";
import YamahaImg from "./img/yamahaFz250.webp";
import "bulma/css/bulma.css";


function App(){
    return( 
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="hero is-dark">
                <ItemList Saludo={"Bienvenidos a la página de Motocompras"}/>
            </div>
            <div className="is-flex">                                     
                <ProfileCard imagen={HondaImg} modelo="Honda Tornado 250cc" descripcion="..."/>
                <ProfileCard imagen={DukeImg} modelo="Duke KTM 250cc" descripcion="..."/>
                <ProfileCard imagen={YamahaImg} modelo="Yamaha Fz 250cc" descripcion="..."/>
            </div>
        </div>    
    ) 
}




export default App;