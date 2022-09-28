import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function CartWidget () {
    const {cartQ, cart} = useContext(CartContext)
    if (cart.length > 0) {
        return(
            
            <div>
                <Link to='/Cart' className="nav-link">
                <img alt="Shopping Cart" src="/assets/cart.svg" width="35" height="35"/>
                <span className="text-muted">{cartQ()}</span>
                </Link>
            </div>
        );
    }
}


export default CartWidget;