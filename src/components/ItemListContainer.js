import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import pedirDatos from '../Data/pedirDatos';
import ItemList from './ItemList';
import { BeatLoader } from 'react-spinners'

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const { categoryId } = useParams ()
    const [loading, setLoading] = useState (true) 

    useEffect (() => {
        setLoading(true)
        pedirDatos ()
            .then ( (succ) => {
                if(!categoryId){
                setProductos (succ)
            } else {
                setProductos (succ.filter((prod) => prod.tipo === categoryId) )
            }
            })
            .catch ((fail) => {
                console.log (fail)
            })
            .finally (() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className='container text-center'>
        {
            loading
            ? <BeatLoader color="#36d7b7" size={25}/>
            : <ItemList productos={productos} />
        }
        </div>
    )
}

export default ItemListContainer ;