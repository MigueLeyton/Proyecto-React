import React, { useEffect, useState } from 'react';
import './Contabilidad.css';

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

function Reportes() {
  const [licencias, setLicencias] = useState([]);
  const [mostrarLicencias, setMostrarLicencias] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('licencias')) || [];
    setLicencias(data);
  }, []);

  const toggleLicencias = () => {
    setMostrarLicencias(prev => !prev);
  };

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
        <li>
          <span>Reporte Mensual</span>
          <div className="acciones">
            <button onClick={toggleLicencias}>
              {mostrarLicencias ? 'Ocultar' : 'Ver'} 
            </button>
          </div>
        </li>
      </ul>
      
      {mostrarLicencias && (
        <Modal onClose={toggleLicencias}>
          <header className='contabilidad-header'> 
            <h2>📋 Licencias Médicas Registradas</h2>
          </header>

          {licencias.length > 0 ? (
            <table className="tabla-reportes">
              <thead>
                <tr>
                  <th>Trabajador</th>
                  <th>Fecha Inicio</th>
                  <th>Fecha Término</th>
                  <th>Días</th>
                  <th>Monto Líquido</th>
                  <th>AFP</th>
                  <th>FONASA</th>
                  <th>CCAF Salud</th>
                  <th>CCAF</th>
                  <th>Recuperado Total</th>
                  <th>Diferencia</th>
                  <th>Estado</th>
                  <th>AFP Nombre</th>
                </tr>
              </thead>
              <tbody>
                {licencias.map((lic, index) => (
                  <tr key={index}>
                    <td>{lic.nombre}</td>
                    <td>{lic.fechaInicio}</td>
                    <td>{lic.fechaFin}</td>
                    <td>{lic.diasLicencia}</td>
                    <td>${lic.montoLiquido?.toLocaleString()}</td>
                    <td>${lic.montoAFP?.toLocaleString()}</td>
                    <td>${lic.montoFonasa?.toLocaleString()}</td>
                    <td>${lic.montoCCAFSalud?.toLocaleString()}</td>
                    <td>${lic.montoCCAF?.toLocaleString()}</td>
                    <td>${lic.montoRecuperado?.toLocaleString()}</td>
                    <td>${lic.diferencia?.toLocaleString()}</td>
                    <td>{lic.estado}</td>
                    <td>{lic.afp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay licencias registradas aún.</p>
          )}

          <button>Descargar</button>
        </Modal>
      )}
    </div>
  );
}

export default Reportes;
