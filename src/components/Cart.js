import { useContext } from "react"
import { CartContext } from "./CartContext"


const Cart = () => {

    const {cart} = useContext (CartContext)

    return (
        <div className="container">
            <h1>Productos en Carrito</h1>
            <hr/>
            { cart.map ((item) => (
                <div className="container" key={item.id}>
                    <h2>{item.nombre}</h2>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>${item.precio}</p>
                    <p><strong>Subtotal: ${item.precio * item.cantidad}</strong></p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}
export default Cart 