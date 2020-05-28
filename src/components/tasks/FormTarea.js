import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    
    //Obtener el state de proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener el state de tareas
    const tareasContext = useContext(tareaContext);
    const { errorTarea, ObtenerTareas, AgregarTarea, ValidarTarea } = tareasContext;

    //State del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    });

    //Destructuring del state
    const { nombre } = tarea;

    //Leer valores del formulario
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para obtener el proyecto actual
    const [proyectoActual] = proyecto;

    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if(nombre.trim() === ''){
            ValidarTarea();
            return;
        }

        //Agregar nueva tarea al state de tareas
        tarea.proyectoID = proyectoActual.id
        tarea.estado = false;
        AgregarTarea(tarea);

        //Obtener y filtrar las tareas del proyecto actual
        ObtenerTareas(proyectoActual.id);

        //Reiniciar el form
        setTarea({
            nombre: ''
        })
    }

    
    return ( 
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
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

            {
                errorTarea
                ?
                    <p className="mensaje error">El nombre de la tarea es obligatorio</p>
                :
                    null
            }
        </div>
     );
}

export default FormTarea;