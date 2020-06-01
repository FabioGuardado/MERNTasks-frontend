import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {
    
    //Obtener el state de proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener el state de tareas
    const tareasContext = useContext(tareaContext);
    const { ObtenerTareas, EliminarTarea, CambiarEstado, setTareaActual } = tareasContext;

    //Función que se ejecuta al hacer click en botón para eliminar tarea
    const handleDelete = id => {
        EliminarTarea(id);
        ObtenerTareas(proyecto[0].id);
    }

    //Función que modifica el estado de la tareas
    const handleClick = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }


        CambiarEstado(tarea);
    }

    //Seleccionar una tarea y agregarla a la tarea actual
    const handleEdit = tarea => {
        setTareaActual(tarea);
    }

    return ( 
        <Fragment>
            <li className="tarea sombre">
                <p>{tarea.nombre}</p>
                <div className="estado">
                    {
                        tarea.estado
                            ?
                                <button
                                    type="button"
                                    className="completo"
                                    onClick={() => handleClick(tarea)}
                                >Completo</button>
                            :
                                <button
                                    type="button"
                                    className="incompleto"
                                    onClick={() => handleClick(tarea)}
                                >Incompleto</button>
                    }
                </div>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primario"
                        onClick={() => handleEdit(tarea)}
                    >Editar</button>
                    
                    <button
                        type="button"
                        className="btn btn-secundario"
                        onClick={() => handleDelete(tarea.id)}
                    >Eliminar</button>
                </div>
            </li>
        </Fragment>
     );
}
 
export default Tarea;