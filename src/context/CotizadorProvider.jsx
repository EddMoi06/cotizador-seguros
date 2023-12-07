import { createContext, useState } from 'react'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [ datos, setDatos] = useState({
        marca: '',
        year: '',
        plan:''
    })

    const handleChangeDatos = e => {
        const value = e.target.value;
        const name = e.target.name
        
        setDatos({
            ...datos,
            [name]: value
        })
    }
    return(
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext