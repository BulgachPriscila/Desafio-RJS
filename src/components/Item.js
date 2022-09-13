import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ( {producto} ) => {
    return (    <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Link to={`/producto/${producto.id}`}>
                            <Button variant="primary">
                                Ver más 
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
    )
}
export default Item 