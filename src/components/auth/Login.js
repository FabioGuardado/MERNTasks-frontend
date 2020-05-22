import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    //State local para iniciar sesión
    const [ usuario, setUsuario ] = useState({
        email: '',
        password: ''
    });

    //Extraer de usuario
    const { email, password } = usuario;

    //Cambiar el state
    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    //Enviar el state local para iniciar sesión
    const handleSubmit = e => {
        e.preventDefault();

        //Validar campos vacíos

        //Pasarlo al action
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombre-dark">
                <h1>Iniciar sesión</h1>
                <form
                    onSubmit={handleSubmit}
                >
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
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesión"
                        />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'}  className="enlace-cuenta">
                Crear una cuenta
                </Link>

            </div>
        </div>
    );
}
 
export default Login;