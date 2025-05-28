import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Licencias.css';

function Licencias() {
  const navigate = useNavigate();

  return (
    <div className="licencias-container">
      <header className="licencias-header">
        <h1>Gestión de Licencias Médicas</h1>
        <p>Administra, revisa y aprueba las licencias médicas del personal.</p>
      </header>

      <section className="licencias-grid">
        <div className="card" onClick={() => navigate('/licencias/nueva')}>
          <h3>Crear Nueva Licencia</h3>
          <p>Registra una nueva licencia médica.</p>
        </div>

        <div className="card" onClick={() => navigate('/licencias/pendientes')}>
          <h3>Licencias Pendientes</h3>
          <p>Revisa las licencias pendientes de aprobación.</p>
        </div>

        <div className="card" onClick={() => navigate('/licencias/historial')}>
          <h3>Historial de Licencias</h3>
          <p>Accede al historial de licencias aprobadas.</p>
        </div>
      </section>
    </div>
  );
}

export default Licencias;
