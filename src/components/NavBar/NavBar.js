import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
function NavBar(){
    return(
        <div className="Container-navbar">
            <nav className="is-flex ">
                <ul className=" mr-6 navbar-index"><a href="./index.html" >Motocompras</a></ul>
                <button className=" mr-6 item-nav">250Cc</button>
                <button className=" mr-6 item-nav">400Cc</button>
                <button className=" mr-6 item-nav">1000Cc</button>
            </nav>
            <div>
                <CartWidget/>
            </div>
        </div>
    )
}
export default NavBar;