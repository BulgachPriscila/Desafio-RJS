import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { BeatLoader } from 'react-spinners'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firedb } from '../Data/fireconfig';

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const { categoryId } = useParams ()
    const [loading, setLoading] = useState (true) 

    useEffect (() => {
        setLoading(true)
        const prodRef = collection(firedb, 'productos')
        const q = categoryId ? query(prodRef, where ('tipo', '==', categoryId) ) : prodRef
        getDocs (q)
            .then ((resp) => {
                const prodDB = resp.docs.map ((doc) => ({ id: doc.id, ...doc.data()}))
                console.log (prodDB)

                setProductos(prodDB)
            })
            .finally(() => {
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