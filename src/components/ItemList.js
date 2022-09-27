import Item from './Item'

const ItemList = ( {productos} = [] ) => {
    return (
        <div className='container'>
            <h1> Catálogo </h1>
            <hr/>
            
            {productos.map ((item) => {
                return      <div className="row text-center" key={item.id}>
                                <Item  producto={item}/>
                            </div>
            })} 
            
        </div>
    )
}

export default ItemList