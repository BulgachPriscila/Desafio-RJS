import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Counter from "./Counter"
import { useState } from "react"


const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState (0)

    const agregar = () => {
        const prodAgregado ={
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad
        }
        
        console.log (prodAgregado)
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
                        <Counter max={item.stock} counter={cantidad} setCounter={setCantidad} agregar={agregar}/>

                        <div>
                        <Link to='/'>
                            <Button variant="primary" className="my-1">
                                Volver al catalogo
                            </Button>
                        </Link>
                        </div>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail