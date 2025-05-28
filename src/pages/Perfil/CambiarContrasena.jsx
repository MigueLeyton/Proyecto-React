import React from 'react';
import './Perfil.css';

function CambiarContrasena() {
  return (
    <div className="perfil-container">
      <header className="perfil-header">
        <h1>Cambiar Contraseña</h1>
        <p>Actualiza tu contraseña de acceso.</p>
      </header>

      <form className="formulario">
        <input type="password" placeholder="Contraseña actual" />
        <input type="password" placeholder="Nueva contraseña" />
        <input type="password" placeholder="Confirmar nueva contraseña" />
        <button type="submit">Actualizar Contraseña</button>
      </form>
    </div>
  );
}

export default CambiarContrasena;
