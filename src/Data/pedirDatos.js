import plantas from "./Data"

const pedirDatos = () => {
    return new Promise (( resolve , reject ) => {
        setTimeout (() => {
            resolve (plantas)
        }, 2000)
    })
}

export default pedirDatos 