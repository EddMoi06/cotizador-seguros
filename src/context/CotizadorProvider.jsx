import { createContext, useState } from 'react'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [ datos, setDatos] = useState({
        marca: '',
        year: '',
        plan:''
    })

    const [ error, setError] = useState('')
    const [ resultado, setResultado] = useState('')
    const [ cargando, setCargando ] = useState(false)

    const handleChangeDatos = e => {
        const value = e.target.value;
        const name = e.target.name
        
        setDatos({
            ...datos,
            [name]: value
        })
    }

    const cotizarSeguro = () => {

        let cantidad;
        const base = 2000

        switch(datos.marca){
            case '1':
                    cantidad = base * 1.30
                break;
            case '2':
                    cantidad = base * 1.15
                break;
            case '3':
                    cantidad = base * 1.05
                break;

                default:
                    break
        }

        const diferencia = new Date().getFullYear() - parseInt(datos.year);
        cantidad -= ((diferencia * 3) * cantidad) / 100

        if(datos.plan === '1'){
           cantidad *= 1.2  
        } else {
            cantidad *= 1.5
        }

        cantidad = cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
        setCargando(true)

        setTimeout(() => {
            setResultado(cantidad)
            setCargando(false)
        }, 3000);
    }
    return(
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
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