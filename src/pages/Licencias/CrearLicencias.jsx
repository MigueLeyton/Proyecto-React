import React, { useState } from 'react';
import './Licencias.css';

function CrearLicencia() {
  const [formData, setFormData] = useState({
    nombre: '',
    rut: '',
    fechaInicio: '',
    fechaFin: '',
    motivo: '',
    afp: '',
    usaCCAF: false, // NUEVO: marca si está afiliado a una caja
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const calcularDias = (inicio, fin) => {
    const fecha1 = new Date(inicio);
    const fecha2 = new Date(fin);
    const diff = Math.ceil((fecha2 - fecha1) / (1000 * 60 * 60 * 24)) + 1;
    return diff > 0 ? diff : 0;
  };

  const calcularMonto = () => {
    const dias = calcularDias(formData.fechaInicio, formData.fechaFin);
    const valorPorDia = 30000;
    return dias * valorPorDia;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const diasLicencia = calcularDias(formData.fechaInicio, formData.fechaFin);
    const valorPorDia = 30000;
    const montoLiquido = diasLicencia * valorPorDia;

    const remuneracionImponible = 1046900;
    const diasPrevisionales = diasLicencia;
    const imponibleDiario = remuneracionImponible / 30;

    const tasasAFP = {
      Capital: 0.1144,
      Cuprum: 0.1144,
      Habitat: 0.1127,
      PlanVital: 0.1116,
      Provida: 0.1145,
      Modelo: 0.1058,
      Uno: 0.1049
    };

    const afpTasa = tasasAFP[formData.afp] || 0;

    const montoAFP = imponibleDiario * diasPrevisionales * afpTasa;

    // Nuevos cálculos para salud:
    let montoFonasa = 0;
    let montoCCAFSalud = 0;

    if (formData.usaCCAF) {
      montoCCAFSalud = imponibleDiario * diasPrevisionales * 0.052;
      montoFonasa = imponibleDiario * diasPrevisionales * 0.018;
    } else {
      montoFonasa = imponibleDiario * diasPrevisionales * 0.07;
    }

    // Cotización adicional CCAF (0.6%)
    const montoCCAF = imponibleDiario * diasPrevisionales * 0.006;

    const montoRecuperado = montoLiquido + montoAFP + montoFonasa + montoCCAFSalud + montoCCAF;
    const diferencia = montoLiquido - montoRecuperado;

    const licenciaCompleta = {
      ...formData,
      diasLicencia,
      montoLiquido,
      montoAFP: Math.round(montoAFP),
      montoFonasa: Math.round(montoFonasa),
      montoCCAFSalud: Math.round(montoCCAFSalud),
      montoCCAF: Math.round(montoCCAF),
      montoRecuperado: Math.round(montoRecuperado),
      diferencia: Math.round(diferencia),
      remuneracionImponible,
      diasPrevisionales,
      estado: "Pagado",
      ingresoDevengado: montoLiquido,
      ingresoPagado: montoLiquido
    };

    const licenciasGuardadas = JSON.parse(localStorage.getItem('licencias')) || [];
    licenciasGuardadas.push(licenciaCompleta);
    localStorage.setItem('licencias', JSON.stringify(licenciasGuardadas));

    setFormData({
      nombre: '',
      rut: '',
      fechaInicio: '',
      fechaFin: '',
      motivo: '',
      afp: '',
      usaCCAF: false,
    });
  };

  return (
  <div className="licencias-container">
    <header className="licencias-header">
      <h1>Registrar Nueva Licencia Médica</h1>
      <p>Registra la nueva licencia médica del personal completando los datos requeridos.</p>
    </header>

    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del empleado"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="rut"
        placeholder="RUT"
        value={formData.rut}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fechaInicio"
        value={formData.fechaInicio}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fechaFin"
        value={formData.fechaFin}
        onChange={handleChange}
        required
      />
      <textarea
        name="motivo"
        placeholder="Motivo de la licencia"
        value={formData.motivo}
        onChange={handleChange}
        required
      />

      {/* Selector de AFP */}
      <select name="afp" value={formData.afp} onChange={handleChange} required>
        <option value="">Selecciona una AFP</option>
        <option value="Capital">Capital</option>
        <option value="Cuprum">Cuprum</option>
        <option value="Habitat">Habitat</option>
        <option value="PlanVital">PlanVital</option>
        <option value="Provida">Provida</option>
        <option value="Modelo">Modelo</option>
        <option value="Uno">Uno</option>
      </select>

      {/* Grupo visual para checkbox de salud */}
      <div className="grupo-salud">
        <input
          type="checkbox"
          id="usaCCAF"
          name="usaCCAF"
          checked={formData.usaCCAF}
          onChange={handleChange}
        />
        <label htmlFor="usaCCAF">¿Empleador afiliado a CCAF?</label>
      </div>

      {formData.fechaInicio && formData.fechaFin && (
        <div className="calculo">
          <p><strong>Días de licencia:</strong> {calcularDias(formData.fechaInicio, formData.fechaFin)}</p>
          <p><strong>Monto estimado a pagar:</strong> ${calcularMonto().toLocaleString()}</p>
        </div>
      )}
      <button type="submit">Registrar Licencia</button>
    </form>
  </div>

  );
}

export default CrearLicencia;
