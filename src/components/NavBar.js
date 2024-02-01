import CartWidget from "./CartWidget/CartWidget";
function NavBar(){
    return(
        <div className="is-flex is-justify-content-space-between navbar is-primary p-4">
            <nav className="is-flex ">
                <a href="./index.html" className="navbar-item button is-black mr-6">Motocompras</a>
                <ul className="navbar-item button mr-6">250cc</ul>
                <ul className="navbar-item button mr-6">400cc</ul>
                <ul className="navbar-item button mr-6">1000cc</ul>
            </nav>
            <div>
                <CartWidget/>
            </div>
        </div>
    )
}
export default NavBar;