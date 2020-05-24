import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {
    
    //Obtener el state de proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para obtener el proyecto actual
    const [proyectoActual] = proyecto;

    
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar"
                    />
                </div>
            </form>
        </div>
     );
}

export default FormTarea;