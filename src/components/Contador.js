import { useState } from "react"
import { Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';

const Contador = () => {
    const [counter, setCounter] = useState (0)

    const suma = () => {
        if (counter <= 4 ){
            setCounter (counter + 1)
        }
        
    }
    const resta = () => {
        if (counter >= 1){
            setCounter (counter - 1)
        }
    }

    return (
        <div className="container">
            <h2>Contador</h2>
            <CardActions>
            <Button variant="outlined" color="error" onClick={resta} > - </Button>
            <p> {counter} </p>
            <Button  onClick={suma} variant="outlined" color="success"> + </Button>
            </CardActions>
        </div>
    )
}



export default Contador