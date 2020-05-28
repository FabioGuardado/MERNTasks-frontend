import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import Tarea from './Tarea';

const ListadoTareas = () => {

    //Obtener el state de proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasProyecto } = tareasContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para obtener el proyecto actual
    const [proyectoActual] = proyecto;


    //Elimina un proyecto
    const handleClick = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0 
                        ? <li className="tarea"><p>No hay tareas</p></li> 
                        : tareasProyecto.map(tarea => (
                            <Tarea 
                                key={tarea.nombre} tarea={tarea}
                            />
                        ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={handleClick}
            >Eliminar proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;