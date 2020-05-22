import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

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

        //agregar al state

        //Reiniciar el form
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo proyecto</button>

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
        </Fragment>
     );
}
 
export default NuevoProyecto;