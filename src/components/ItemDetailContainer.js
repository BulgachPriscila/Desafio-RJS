import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import pedirDatos from "../Data/pedirDatos"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [item, setItem] = useState() 
    const { itemId } = useParams ()
    const [loading, setLoading] = useState (true) 

    useEffect(() => {

        pedirDatos()
            .then((succ) => {
                setItem (succ.find ((prod) => prod.id === Number(itemId)) )
            })
            .catch (fail => console.log(fail))
            .finally (() => {
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