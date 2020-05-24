import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTO, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from '../../types';

const ProyectoState = props => {
    
    const proyectos = [
        { id: 1, nombre: 'Tienda virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de sitio web' }
    ];

    const initialState = {
        
        proyectos: [],
        formulario: false,
        errorFormulario: false,
        proyecto: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {

        dispatch({
            type: OBTENER_PROYECTO,
            payload: proyectos
        })
    }

    const agregarProyecto = proyecto => {
        //Asignar id de uuid
        proyecto.id = uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
    }

    //Validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    //Selecciona el proyecto que el usuario eligió
    const proyectoActual = proyectoID => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoID
        });
    }

    //Eliminar proyecto
    const eliminarProyecto = proyectoID => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoID
        });
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;