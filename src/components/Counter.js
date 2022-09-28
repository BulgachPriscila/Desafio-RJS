
const Counter = ({max, counter, setCounter, agregar}) => {

    const suma = () => {
        if (counter < max){
            setCounter (counter + 1)
        }
        
    }
    const resta = () => {
        if (counter > 0){
            setCounter (counter - 1)
        }
    }


    return (
        <div className="container">
            <button onClick={resta} className={ counter === 1 ? "btn btn-secondary disabled" : "btn tilesButton"}> - </button>
            <span className="mx-2"> {counter} </span>
            <button onClick={suma} className={ counter === max ? "btn btn-secondary disabled" : "btn tilesButton"}> + </button>
            <button onClick={agregar} className="btn my-2 tilesButton">Agregar al carrito</button> 
        </div>
    )
}



export default Counter