import React from 'react';
import './Perfil.css';

function EditarPerfil() {
  return (
    <div className="perfil-container">
      <header className="perfil-header">
        <h1>Editar Perfil</h1>
        <p>Modifica tus datos personales.</p>
      </header>

      <form className="formulario">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <textarea placeholder="Biografía (opcional)" rows="4"></textarea>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarPerfil;
