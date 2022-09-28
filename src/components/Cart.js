import { useContext } from "react"
import { CartContext } from "./CartContext"
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Cart = () => {

    const {cart, cartT, vaciarCarrito, quitarItem} = useContext (CartContext)

    return (

        <div className="text-center">
            {
                cart.length === 0
                ?   <>
                        <h4> El carrito está vacío</h4>
                        <Link to='/' className="btn tilesButton"> Ver catalogo </Link>
                    </>
                :   <> 
                        <h1>Productos en Carrito</h1>
                        <hr/>
                        <div className="row text-center mx-5">
                            { cart.map ((item) => (
                                <div className="card col tilesBackground" key={item.id}>
                                        <div className="card-body">
                                            <h2>{item.nombre}</h2>
                                            <p>Cantidad: {item.cantidad}</p>
                                            <p>${item.precio}</p>
                                            <hr/>
                                            <p><strong>Subtotal: ${item.precio * item.cantidad}</strong></p>
                                            <button className="btn btn-danger" onClick={() => quitarItem(item.id) }><BsFillTrashFill/></button>
                                        </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                        <h3 className="my-2">Total: $ {cartT()}</h3>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>
                    </>  
            }
        </div>
    )
}
export default Cart 