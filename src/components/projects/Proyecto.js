import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //Obtener state de tareas
    const tareasContext = useContext(tareaContext);
    const { ObtenerTareas } = tareasContext;

    const handleClick = id => {
        proyectoActual(id);
        ObtenerTareas(id); //Filtrar tareas cuando se de click
    }

    return ( 
        <Fragment>
            <li>
                <button
                    type="button"
                    className="btn btn-blank"
                    onClick={() => handleClick(proyecto.id)}
                >{proyecto.nombre}</button>
            </li>
        </Fragment>
     );
}
 
export default Proyecto;