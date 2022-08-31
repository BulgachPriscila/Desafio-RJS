
function CartWidget (carrito) {
    return(
        <div>
            <img alt="Shopping Cart" src="./../public/assets/cart.svg" width="35" height="35"/>
            <p>{carrito.cantidad}</p>
        </div>
    );
}


export default CartWidget;