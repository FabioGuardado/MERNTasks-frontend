import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    
    //Obtener el state de proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener el state de tareas
    const tareasContext = useContext(tareaContext);
    const { tareaActual, errorTarea, ObtenerTareas, AgregarTarea, ValidarTarea, ActualizarTarea } = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaActual !== null){
            setTarea(tareaActual);
        } else { 
            setTarea({
                nombre: ''
            });
        }
    }, [tareaActual]);

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

        //Revisar si es edición o una nueva tarea
        if(tareaActual ===  null){
            //Tarea nueva
            //Agregar nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id
            tarea.estado = false;
            AgregarTarea(tarea);
        } else {
            //Actualizar tarea existente
            ActualizarTarea(tarea);
        }

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
                        value={tareaActual ? 'Editar tarea' : 'Agregar tarea'}
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