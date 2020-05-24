import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    //State local del proyecto
    const [ proyecto, setProyecto ] = useState({
        nombre: '',
    });
    //Extraer nombre de proyecto
    const { nombre } = proyecto;

    //Modificar el state
    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }

    //Enviar proyecto
    const handleSubmit = e => {
        e.preventDefault();

        //Validar proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto);

        //Reiniciar el form
        setProyecto({
            nombre: ''
        });
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={mostrarFormulario}
            >Nuevo proyecto</button>

            {
                (formulario)
                ?
                <form
                className="formulario-nuevo-proyecto"
                onSubmit={handleSubmit}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />

                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto"
                    />
                </form>
                :
                    null
            }
            {
                errorFormulario
                ?
                    <p className="mensaje error">El nombre es obligatorio</p>
                :
                    null
            }
        </Fragment>
     );
}
 
export default NuevoProyecto;