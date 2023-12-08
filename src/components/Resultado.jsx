import useCotizador from "../hooks/useCotizador"
import { useCallback, useRef, useMemo } from 'react'

const Resultado = () => {
    const { resultado, datos } = useCotizador();
    const { marca, year, plan} = datos;

    const yearRef = useRef(year)

    const resetMarca = () => {

        let nombreMarca
        switch(marca){
            case '1': nombreMarca = 'Europeo'
                break;
            case '2': nombreMarca = 'Americano'
                break;
            case '3': nombreMarca = 'Asiatico'
                break;
        }

        return nombreMarca
    }

    const resetPlan = () => {

        let nombrePlan
        switch(plan){
            case '1': nombrePlan = 'Basico'
                break;
            case '2': nombrePlan = 'Completo'
                break;
        }

        return nombrePlan
    }

    const nombreMarca = useMemo(() => resetMarca(), [resultado])
    const nombrePlan = useMemo( () => resetPlan(), [resultado])

    if(resultado.length === 0) return null

    return (
        <div className="bg-gray-100 p-3 mt-5 shadow text-center">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="mt-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca}
            </p>

            <p className="mt-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan}
            </p>

            <p className="mt-2">
                <span className="font-bold">Año del Auto: </span>
                {yearRef.current}
            </p>

            <p className="mt-5 text-2xl">
                <span className="font-bold">Total: </span>
                {resultado}
            </p>

        </div>
    )
}

export default Resultado
