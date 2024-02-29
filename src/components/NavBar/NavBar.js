import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";
function NavBar(){
    return(
        <div className="Container-navbar">
            <nav className="is-flex ">
                <Link to="/">
                    <li className=" mr-6 navbar-index">Motocompras</li>
                </Link>
                <NavLink to={`/category/250`}className=" mr-6 item-nav">250Cc</NavLink>
                <NavLink to={`/category/400`}className=" mr-6 item-nav">400Cc</NavLink>
                <NavLink to={`/category/1000`}className=" mr-6 item-nav">1000Cc</NavLink>
            </nav>
            <div>
                <CartWidget/>
            </div>
        </div>
    )
}
export default NavBar;