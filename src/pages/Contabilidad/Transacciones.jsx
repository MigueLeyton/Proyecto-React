import React from 'react';
import './Contabilidad.css';

function Transacciones() {
  return (
    <div className="contabilidad-container">
      <header className="contabilidad-header">
        <h1>Transacciones</h1>
        <p>Visualiza los movimientos contables registrados en el sistema.</p>
      </header>

      <ul className="lista">
        <li>
          <span>Ingreso - Factura #1023 - $1.200</span>
          <div className="acciones">
            <button>Ver Detalle</button>
          </div>
        </li>
        <li>
          <span>Egreso - Sueldo Abril - $5.000</span>
          <div className="acciones">
            <button>Ver Detalle</button>
          </div>
        </li>
        <li>
          <span>Ingreso - Servicio externo - $3.400</span>
          <div className="acciones">
            <button>Ver Detalle</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Transacciones;
