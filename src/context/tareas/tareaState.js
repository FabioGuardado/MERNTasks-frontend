import React, {useReducer} from 'react';
import TareaContext from '../tareas/tareaContext';
import TareaReducer from '../tareas/tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREAS, VALIDAR_TAREA } from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas:[
            { nombre: 'Elegir plataforma', estado:  true, proyectoId: 1},
            { nombre: 'Elegir colores', estado:  false, proyectoId: 2},
            { nombre: 'Elegir métodos de pago', estado: false, proyectoId: 4},
            { nombre: 'Elegir hosting', estado:  true, proyectoId: 3},
            { nombre: 'Elegir plataforma', estado:  true, proyectoId: 2},
            { nombre: 'Elegir colores', estado:  false, proyectoId: 3},
            { nombre: 'Elegir métodos de pago', estado: false, proyectoId: 1},
            { nombre: 'Elegir hosting', estado:  true, proyectoId: 4},
            { nombre: 'Elegir colores', estado:  false, proyectoId: 1},
            { nombre: 'Elegir métodos de pago', estado: false, proyectoId: 4},
            { nombre: 'Elegir hosting', estado:  true, proyectoId: 2}
        ],
        tareasProyecto: null,
        errorTarea: false
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

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                ObtenerTareas,
                AgregarTarea,
                ValidarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;