import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  /* Seteo de pacientes y generaedor de lista de objetos */
  const [pacientes,setPacientes] = useState([]);
  /* controlador de Botones Edit - Delete */
  const [controlador, setControlador] = useState({});

  useEffect(()=>{
    const obtenerLocalStore = ()=>{
      const pacientesLocalStore = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLocalStore)
    }

    obtenerLocalStore()
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)

  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes} 
        setPacientes={setPacientes} 
        controlador={controlador}
        setControlador={setControlador}
        />


        <ListadoPacientes 
        pacientes={pacientes} 
        setControlador={setControlador}
        eliminarPaciente={eliminarPaciente}
        
        />
      </div>
    </div>
  )
}

export default App
