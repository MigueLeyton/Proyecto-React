import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contabilidad.css';

function Contabilidad() {
  const navigate = useNavigate();

  return (
    <div className="contabilidad-container">
      <header className="contabilidad-header">
        <h1>Gestión Contable</h1>
        <p>Accede a los reportes financieros y revisa los movimientos contables.</p>
      </header>

      <section className="contabilidad-grid">
        <div className="card" onClick={() => navigate('/contabilidad/reportes')}>
          <h3>Ver Reportes</h3>
          <p>Consulta los reportes financieros actualizados.</p>
        </div>

        <div className="card" onClick={() => navigate('/contabilidad/informes')}>
          <h3>Generar Informe</h3>
          <p>Genera nuevos informes contables personalizados.</p>
        </div>

        <div className="card" onClick={() => navigate('/contabilidad/transacciones')}>
          <h3>Transacciones</h3>
          <p>Revisa las transacciones y movimientos realizados.</p>
        </div>
      </section>
    </div>
  );
}

export default Contabilidad;
