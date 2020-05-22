import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {

    //State local para crear cuenta
    const [ usuario, setUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //Extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    //Cambiar el state
    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    //Enviar el state local para registrar cuenta
    const handleSubmit = e => {
        e.preventDefault();

        //Validar campos vacíos

        //Validar password mínimo de 6 caracteres

        //Los dos password son iguales

        //Pasarlo al action
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombre-dark">
                <h1>Crear una cuenta</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu E-mail"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Crear cuenta"
                        />
                    </div>

                </form>

                <Link to={'/'}  className="enlace-cuenta">
                    Iniciar sesión
                </Link>
                
            </div>
        </div>
    );
}
 
export default NuevaCuenta;