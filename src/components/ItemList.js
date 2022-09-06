import Item from './Item'
import { Container } from 'react-bootstrap'

const ItemList = ( {productos} = [] ) => {
    return (
        <div className='container'>
            <h1> Catálogo </h1>
            <hr/>
            
            {productos.map ((item) => {
                return      <Container key={item.id}>
                                <Item producto={item}/>
                            </Container>
            
            })} 
            
        </div>
    )
}

export default ItemList