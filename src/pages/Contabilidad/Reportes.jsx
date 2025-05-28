import React from 'react';
import './Contabilidad.css';

function Reportes() {
  return (
    <div className="contabilidad-container">
      <header className="contabilidad-header">
        <h1>Reportes Financieros</h1>
        <p>Consulta los reportes financieros generados automáticamente.</p>
      </header>

      <ul className="lista">
        <li>
          <span>Reporte Trimestral - Q1</span>
          <div className="acciones">
            <button>Ver</button>
            <button>Descargar</button>
          </div>
        </li>
        <li>
          <span>Balance Anual 2024</span>
          <div className="acciones">
            <button>Ver</button>
            <button>Descargar</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Reportes;
