import plantas from "./Data"

const pedirDatos = () => {
    return new Promise (( resolve , reject ) => {
        setTimeout (() => {
            resolve (plantas)
        }, 1000)
    })
}

export default pedirDatos 