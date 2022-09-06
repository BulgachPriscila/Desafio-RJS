import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ( {producto} ) => {
    return (    <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text> {producto.stock} </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
    )
}
export default Item 