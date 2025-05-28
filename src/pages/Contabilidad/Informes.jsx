import React, { useState } from 'react';
import './Contabilidad.css';

function Informes() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Informe "${titulo}" generado con éxito.`);
    setTitulo('');
    setContenido('');
  };

  return (
    <div className="contabilidad-container">
      <header className="contabilidad-header">
        <h1>Generar Informe</h1>
        <p>Crea un nuevo informe contable personalizado.</p>
      </header>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del Informe"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenido del informe..."
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          rows={6}
          required
        />
        <button type="submit">Generar</button>
      </form>
    </div>
  );
}

export default Informes;
