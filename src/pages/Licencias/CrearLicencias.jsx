import React, { useState } from 'react';
import './Licencias.css';

function CrearLicencia() {
  const [formData, setFormData] = useState({
    nombre: '',
    rut: '',
    fechaInicio: '',
    fechaFin: '',
    motivo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nueva licencia registrada:', formData);
    // Aquí iría tu lógica de backend
  };

  return (
    <div className="licencias-container">
      <header className="licencias-header">
      <h1>Registrar Nueva Licencia Médica</h1>
      <p>Registra la nueva licencia médica del personal completando los datos requeridos.</p>
      </header>
      
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre del empleado" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="rut" placeholder="RUT" value={formData.rut} onChange={handleChange} required />
        <input type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} required />
        <input type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} required />
        <textarea name="motivo" placeholder="Motivo de la licencia" value={formData.motivo} onChange={handleChange} required />
        <button type="submit">Registrar Licencia</button>
      </form>   
    </div>
  );
}

export default CrearLicencia;
