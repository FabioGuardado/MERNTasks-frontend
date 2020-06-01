import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TareaContext from '../tareas/tareaContext';
import TareaReducer from '../tareas/tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREAS, VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA } from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas:[
            { id: 1, nombre: 'Elegir plataforma', estado:  true, proyectoId: 1},
            { id: 2, nombre: 'Elegir colores', estado:  false, proyectoId: 2},
            { id: 3, nombre: 'Elegir métodos de pago', estado: false, proyectoId: 4},
            { id: 4, nombre: 'Elegir hosting', estado:  true, proyectoId: 3},
            { id: 5, nombre: 'Elegir plataforma', estado:  true, proyectoId: 2},
            { id: 6, nombre: 'Elegir colores', estado:  false, proyectoId: 3},
            { id: 7, nombre: 'Elegir métodos de pago', estado: false, proyectoId: 1},
            { id: 8, nombre: 'Elegir hosting', estado:  true, proyectoId: 4},
            { id: 9, nombre: 'Elegir colores', estado:  false, proyectoId: 1},
            { id: 10, nombre: 'Elegir métodos de pago', estado: false, proyectoId: 4},
            { id: 11, nombre: 'Elegir hosting', estado:  true, proyectoId: 2}
        ],
        tareasProyecto: null,
        errorTarea: false,
        tareaActual: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Crear las funciones
    //Obtener tareas de un proyecto
    const ObtenerTareas = proyectoID => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoID
        });
    }

    //Agregar una tarea
    const AgregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }

    //Valida y muestra un error en caso de que sea necesario
    const ValidarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    }

    //Eliminar tarea por id
    const EliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //Cambia el estado de cada tarea
    const CambiarEstado = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    }

    //Extrae una tarea para editarla
    const setTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    //Actualizar tarea
    const ActualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaActual: state.tareaActual,
                ObtenerTareas,
                AgregarTarea,
                ValidarTarea,
                EliminarTarea,
                CambiarEstado,
                setTareaActual,
                ActualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;