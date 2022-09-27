import { createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext()

export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1000
        })
        setCart([...cart, item])
    }
    const quitarItem = (id) => {        
        Swal.fire({
            title: 'Quiere eliminarlo del carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Producto eliminado!',
                    '',
                    'success',
                    setCart( cart.filter((item) => item.id !==  id))
                )
            }
        })
    }

    const enCarrito = (id) => {
        return cart.some((item) => item.id === id)
    }
    const cartQ = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0) 
    }
    const cartT = () => {
        return cart.reduce ((acc, item) => acc + item.cantidad * item.precio, 0)
    }
    const vaciarCarrito = () => {
        Swal.fire({
            title: 'Estás seguro de vaciar el carrito?',
            text: "Vas a perder los productos agregados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado!',
                    'El carrito está vacío!',
                    'success',
                    setCart ([])
                )
            }
        })
    }

    return (
        <CartContext.Provider  value={ { cart, addToCart, enCarrito, cartQ, cartT, vaciarCarrito, quitarItem} }>
            {children} 
        </CartContext.Provider>
    )
}