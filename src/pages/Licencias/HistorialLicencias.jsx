import React from 'react';
import './Licencias.css';

function HistorialLicencias() {
  const historial = [
    { id: 1, nombre: 'Ana Rojas', fecha: '2025-04-15', estado: 'Aprobada' },
    { id: 2, nombre: 'Diego Contreras', fecha: '2025-04-20', estado: 'Rechazada' },
  ];

  return (
    <div className="licencias-container">
      <header className="licencias-header">
      <h1>Historial de Licencias</h1>
      <p>Aquí veráz el historial de las licencias médicas.</p>
      </header>
      
      <ul className="lista">
        {historial.map(l => (
          <li key={l.id}>
            {l.nombre} - {l.fecha} ({l.estado})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistorialLicencias;
