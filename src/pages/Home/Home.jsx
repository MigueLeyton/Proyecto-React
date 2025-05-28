import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>MediGestor</h1>
        <p>Sistema integral de licencias médicas y gestión contable</p>
      </header>

      <section className="home-grid">
        <div className="card" onClick={() => navigate('/licencias')}>
          <h3>Gestión de Licencias</h3>
          <p>Administra y revisa las licencias médicas con facilidad.</p>
        </div>

        <div className="card" onClick={() => navigate('/contabilidad')}>
          <h3>Contabilidad</h3>
          <p>Revisa ingresos, egresos y reportes financieros.</p>
        </div>

        <div className="card" onClick={() => navigate('/perfil')}>
          <h3>Mi Perfil</h3>
          <p>Configura tu cuenta, actualiza tus datos y preferencias.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
