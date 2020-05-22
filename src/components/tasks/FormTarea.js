import React from 'react';

const FormTarea = () => {
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