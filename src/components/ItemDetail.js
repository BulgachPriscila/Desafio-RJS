import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    return(
        <div className="container"> 
            <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>Stock : {item.stock}</Card.Text>
                        <Card.Text>Tipo : {item.tipo}</Card.Text>
                        <Card.Text>{item.detalles}</Card.Text>
                        <div className="container">
                        <Link to='/'>
                            <Button variant="primary">
                                Volver al catalogo
                            </Button>
                        </Link>
                        <Link to='/productos/suculentas'>
                            <Button variant="primary">
                                Volver a suculentas
                            </Button>
                        </Link>
                        <Link to='/productos/cactus'>
                            <Button variant="primary">
                                Volver a cactus
                            </Button>
                        </Link> 
                        </div>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail