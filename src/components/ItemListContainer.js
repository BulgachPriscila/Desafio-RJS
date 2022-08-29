import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemListContainer() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img alt="imagen producto" variant="top" src="./../suculenta.png"/>
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                Descripción del producto
                </Card.Text>
                <Card.Text>
                    Precio del producto
                </Card.Text>
                <Button variant="success">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemListContainer ;