import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

function Perfil() {
  const navigate = useNavigate();

  return (
    <div className="perfil-container">
      <header className="perfil-header">
        <h1>Mi Perfil</h1>
        <p>Gestiona tu información personal y preferencias.</p>
      </header>

      <section className="perfil-options">
        <div className="card" onClick={() => navigate('/perfil/editar')}>
          <h3>Editar Información</h3>
          <p>Actualiza tu nombre, email y otros datos.</p>
        </div>

        <div className="card" onClick={() => navigate('/perfil/cambiar-contrasena')}>
          <h3>Cambiar Contraseña</h3>
          <p>Modifica tu contraseña de acceso.</p>
        </div>

        <div className="card" onClick={() => navigate('/perfil/seguridad')}>
          <h3>Seguridad</h3>
          <p>Configura opciones de seguridad para tu cuenta.</p>
        </div>
      </section>
    </div>
  );
}

export default Perfil;
