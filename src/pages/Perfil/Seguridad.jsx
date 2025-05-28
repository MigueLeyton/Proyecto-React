import React from 'react';
import './Perfil.css';

function Seguridad() {
  return (
    <div className="perfil-container">
      <header className="perfil-header">
        <h1>Seguridad de la Cuenta</h1>
        <p>Configura opciones avanzadas de seguridad.</p>
      </header>

      <ul className="lista">
        <li>
          Verificación en dos pasos
          <div className="acciones">
            <button>Activar</button>
          </div>
        </li>
        <li>
          Notificaciones de inicio de sesión
          <div className="acciones">
            <button>Configurar</button>
          </div>
        </li>
        <li>
          Dispositivos reconocidos
          <div className="acciones">
            <button>Ver lista</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Seguridad;
