import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const { error } = useCotizador()
  return (
    <div className="w-full bg-red-100 border-red-500 font-bold text-xl text-center p-3 text-red-700 rounded-md">
        {error}
    </div>
  )
}

export default Error
