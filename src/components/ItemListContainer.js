import { useEffect } from 'react'
import { useState } from 'react'
import pedirDatos from '../Data/pedirDatos';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    
    console.log (productos)

    useEffect (() => {
        pedirDatos ()
            .then ( (succ) => {
                setProductos (succ)
            })
            .catch ((fail) => {
                console.log (fail)
            })
            .finally (() => {
                console.log ("Todo cargado!")
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer ;