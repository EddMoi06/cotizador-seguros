import Formulario from '../components/Formulario'
import useCotizador from '../hooks/useCotizador'
import Resultado from './Resultado'
import Spinner from './Spinner'

const AppSeguros = () => {

  const { cargando } = useCotizador()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">
                Cotizador de Seguros de Autos
            </h1>
        </header>

        <main className="bg-white shadow p-10 rounded-lg md:w-2/3 lg:w-2/4 mx-auto">
            <Formulario/>

            {cargando ? <Spinner/> : <Resultado/>}
        </main>
    </>
  )
}

export default AppSeguros
