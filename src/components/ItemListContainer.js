import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemListContainer({botonAdd}) {
    return (
        <Card style={{ width: '18rem' }} className="tilesBackground text-center">
            <Card.Img alt="imagen producto" variant="top" src="/assets/suculenta.png"/>
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                Descripción del producto
                </Card.Text>
                <Card.Text>
                    Precio del producto
                </Card.Text>
                <Button variant="success">{botonAdd}</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemListContainer ;