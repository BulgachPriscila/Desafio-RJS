import { Link } from 'react-router-dom';


const Item = ( {producto} ) => {
    return (
                    <div className='col card'>  
                        <img alt='plantaimg' style={{ width: '18rem'}} src={producto.img}/>
                        <hr/>
                        <div className="card-body">
                            <h5>{producto.nombre}</h5>
                            <button className='btn tilesButton'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver más</Link></button>
                        </div>
                    </div>
    )
}
export default Item 