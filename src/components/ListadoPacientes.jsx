import Pacientes from "./Pacientes"
import { useEffect } from "react"

const ListadoPacientes = ({pacientes, setControlador, eliminarPaciente}) => {
  
  

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
      {pacientes && pacientes.length ? (
        <>

          <h2 className="font-black text-3xl text-center" >ListadoPacientes</h2>
          <p className="text-lg text-center mb-10 mt-5">
            Adminstra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map( paciente => (
              <Pacientes 
              paciente={paciente}
              key={paciente.id}
              setControlador={setControlador}
              eliminarPaciente={eliminarPaciente}
              />
              ))}

        </>     
      ) : (
        <>
          <h2 className="font-black text-3xl text-center" >No Hay Pacientes</h2>
          <p className="text-lg text-center mb-10 mt-5">
          Comienza a agregar Pacientes, {''}
          <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
          </p>

        </>
      )}
      
        
        
      
    </div>
  )
}

export default ListadoPacientes