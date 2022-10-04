import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { firedb } from "../Data/fireconfig"


const ItemDetailContainer = () => {
    const [item, setItem] = useState() 
    const { itemId } = useParams ()
    const [loading, setLoading] = useState (true) 

    useEffect(() => {
        setLoading (true)
        const docRef = doc(firedb, 'productos', itemId)
        getDoc(docRef)
            .then((doc) =>{
                setItem({id: doc.id, ...doc.data()})
            } )
            .finally(() => {
                setLoading(false)
            })
    },[])



    return(
        <div className="container">
        {
            loading
            ? <h2>Cargando elemento por favor espere</h2>
            : <ItemDetail item={item}/>
        }
        </div>
    )

}

export default ItemDetailContainer