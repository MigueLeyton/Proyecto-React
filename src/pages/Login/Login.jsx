// Importo React y useState para manejar los estados (email, password, error)
import React, { useState } from 'react';
// useNavigate es para redireccionar después del login
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Estilos específicos del login

function Login() {
  // Estados para guardar lo que el usuario escribe en el formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Para mostrar errores si algo falla

  const navigate = useNavigate(); // Esto me permite redirigir a otra vista

  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evito que la página se recargue
    setError(''); // Limpio errores anteriores

    try {
      // Hago una petición POST al backend con los datos del formulario
      const response = await fetch('http://localhost:5174/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Envío el email y password al backend
      });

      const data = await response.json(); // Parseo la respuesta a JSON

      if (response.ok) {
        // Si todo sale bien, puedo guardar los datos del usuario si quiero
        // localStorage.setItem('usuario', JSON.stringify(data.data));
        navigate('/home'); // Redirijo al usuario al home
      } else {
        // Si la API responde con error, muestro el mensaje
        setError(data.message);
      }
    } catch (err) {
      // Si hay un error con la conexión o el servidor
      console.error('Error al iniciar sesión:', err);
      setError('Error en el servidor');
    }
  };

  // Lo que se muestra en pantalla
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="title">MediGestor</h1>
        <p className="subtitle">Sistema integral de licencias médicas y gestión contable</p>

        {/* Formulario de login */}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Guardo lo que escribe el usuario
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Guardo la contraseña
            required
          />
          <button type="submit">Iniciar sesión</button> {/* Botón para enviar el formulario */}
        </form>

        {/* Si hay un error, lo muestro en rojo */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Links extra */}
        <div className="extras">
          <a href="#">¿Olvidaste tu contraseña?</a>
          <a href="/register">Crear cuenta nueva</a>
        </div>
      </div>
    </div>
  );
}

export default Login; // Exporto el componente para poder usarlo en otras partes
