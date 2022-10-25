const Pacientes = ({paciente, setControlador, eliminarPaciente}) => {

const handlerEliminar = () => {
  const respuesta = confirm('Deseas eliminar este paciente ? ');
  if(respuesta){
    eliminarPaciente(paciente.id)
  }
}

  return (
    <>
        <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-3">

            <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {""}
            <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {""}
            <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {""}
            <span className="font-normal normal-case">{paciente.email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de Alta: {""}
            <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {""}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>

            <div className="flex justify-between mt-5">
              <button 
              type="button"
              className="py-2 bg-indigo-600 px-5 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
              onClick={() => setControlador(paciente) }
              >Editar</button>

              <button 
              type="button"
              className="py-2 bg-red-600 px-5 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
              onClick={handlerEliminar}
              >Eliminar</button>

            </div>
        </div>
    </>
  )
}

export default Pacientes