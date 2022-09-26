import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Counter from "./Counter"
import { useContext, useState } from "react"
import { CartContext } from "./CartContext"


const ItemDetail = ({item}) => {

    const { cart, addToCart, enCarrito} = useContext(CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState (1)

    const agregar = () => {
        const prodAgregado ={
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad
        }
        addToCart (prodAgregado) 
    }


    return(
        <div className="container text-center"> 
            <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>Stock : {item.stock}</Card.Text>
                        <Card.Text>Tipo : {item.tipo}</Card.Text>
                        <Card.Text>{item.detalles}</Card.Text>
                        
                        {
                            enCarrito(item.id) 
                            ?   <Link to='/cart' className="btn btn-success my-1"> Terminar compra </Link>
                            :   <Counter max={item.stock} counter={cantidad} setCounter={setCantidad} agregar={agregar}/> 
                        }
                    </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail