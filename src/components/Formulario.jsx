import { marcas, years, planes } from '../constants/index'
import { Fragment } from 'react'
import useCotizador from '../hooks/useCotizador'

const Formulario = () => {

    const { handleChangeDatos, datos } = useCotizador()
  return (
    <>
        <form>
            <div className="my-5">
                <label htmlFor="marca" className="block mb-3 font-bold text-gray-600 uppercase text-center">Marca</label>
                <select 
                    name='marca' 
                    id="marca" 
                    className="w-full bg-white border rounded-md border-gray-200 p-3 text-center"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}
                >
                    <option value="">-- Seleccione --</option>
                    {marcas.map(marca => (
                        <option value={marca.id} key={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="year" className="block mb-3 font-bold text-gray-600 uppercase text-center">Año</label>
                <select 
                    name='year' 
                    id="year" 
                    className="w-full bg-white border rounded-md border-gray-200 p-3 text-center"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}
                >
                    <option value="">-- Seleccione --</option>
                    {years.map(year => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="year" className="block mb-3 font-bold text-gray-600 uppercase text-center">Elige un Plan</label>
                <div className='flex gap-3 justify-center'>
                    {planes.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="">{plan.nombre}</label>
                            <input 
                                type="radio" 
                                name='plan'
                                value={plan.id}
                                onChange={e => handleChangeDatos(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input 
                type="submit" 
                className='text-white bg-blue-400 hover:bg-blue-600 rounded w-full cursor-pointer transition-colors shadow p-3 uppercase font-bold'
                value='Cotizar'
            />

        </form>
    </>
  )
}

export default Formulario
