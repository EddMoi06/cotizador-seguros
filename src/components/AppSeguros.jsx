import Formulario from '../components/Formulario'

const AppSeguros = () => {
  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">
                Cotizador de Seguros de Autos
            </h1>
        </header>

        <main className="bg-white shadow p-10 rounded-lg md:w-2/3 lg:w-2/4 mx-auto">
            <Formulario/>
        </main>
    </>
  )
}

export default AppSeguros
