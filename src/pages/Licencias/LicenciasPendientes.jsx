import React from 'react';
import './Licencias.css';

function LicenciasPendientes() {
  const licencias = [
    { id: 1, nombre: 'Laura Silva', fecha: '2025-05-10' },
    { id: 2, nombre: 'Pedro Torres', fecha: '2025-05-12' },
  ];

  return (
    <div className="licencias-container">
      <header className="licencias-header">
      <h1>Licencias Pendientes</h1>
      <p>Revisa a los usuarios con sus licencias médicas pendientes.</p>
      </header>
      
      <ul className="lista">
        {licencias.map(l => (
          <li key={l.id}>
            {l.nombre} - {l.fecha}
            <div className="acciones">
              <button>Aprobar</button>
              <button>Rechazar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LicenciasPendientes;
