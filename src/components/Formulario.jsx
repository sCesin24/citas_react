import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({ pacientes,setPacientes, controlador, setControlador }) => {

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  useEffect( () => {
      if(Object.keys(controlador).length > 0){
          setNombre(controlador.nombre)
          setPropietario(controlador.propietario)
          setEmail(controlador.email)
          setFecha(controlador.fecha)
          setSintomas(controlador.sintomas)
      }
  }, [controlador])

  const [error,setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  	

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del Formulario
    if([nombre,propietario,email,fecha,sintomas].includes('')){
        setError(true)
        return;
    } 
    setError(false)

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      // id: generarId()
    }

    if(controlador.id){
      // Editando el Registro
      objetoPaciente.id = controlador.id
      const pacientesActualizados = pacientes.map( (controladorState)=> controladorState.id === controlador.id ? objetoPaciente : controladorState )
      setPacientes(pacientesActualizados)
      setPacientes({})
    }else {
      objetoPaciente.id = generarId()
      setPacientes([...pacientes,objetoPaciente])
    }

    

    // Resetear form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimientos Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
      </p>  

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          
          {error && <Error><p>todos los campos son obligatorios</p></Error>}
          <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold text-center">Nombre Mascota</label>

              <input id="mascota" type="text" value={nombre} onChange={ (e) => setNombre(e.target.value) } placeholder="Nombre Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md placeholder:text-center"/>
          </div>

          <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold text-center">Nombre Propietario</label>

              <input id="propietario" type="text" value={propietario} onChange={ (e) => setPropietario(e.target.value) } placeholder="Nombre Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md placeholder:text-center"/>
          </div>

          <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold text-center">Correo Electronico</label>

              <input id="email" type="email" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder="Correo Electronico" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md placeholder:text-center"/>
          </div>

          <div className="mb-5">
              <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold text-center">Fecha de Alta</label>

              <input id="fecha" type="date"  value={fecha} onChange={ (e) => setFecha(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>
          </div>

          <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold text-center">sintomas</label>

              <textarea id="sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md placeholder:text-center" placeholder="Describe los sintomas"/>
          </div>

          <input 
          type="submit" 
          className="bg-indigo-600 w-full rounded-md cursor-pointer p-3 text-black font-bold uppercase hover:bg-indigo-800" 
          value={controlador.id ? 'Editar Paciente' : 'Agregar Paciente'}
          
          />
          
      </form>
    </div>
  )
}

export default Formulario