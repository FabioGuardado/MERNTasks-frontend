import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //Obtener proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;
    
    //Obtener proyectos cuando carga el componente
    useEffect( () => {
        obtenerProyectos();
        //eslint-disable-next-line
    }, [])

    //Verificar si hay proyectos
    if( proyectos.length === 0 ) return <p>No hay proyectos, ¡Comienza creando uno!</p>;

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {
                    proyectos.map(proyecto => (
                        <CSSTransition
                            key={proyecto.id}
                            timeout={200}
                            classNames="proyecto"
                        >
                            <Proyecto proyecto={proyecto}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;