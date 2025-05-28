import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Páginas generales
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';

// Sección del Perfil
import Perfil from './pages/Perfil/Perfil';
import EditarPerfil from './pages/Perfil/EditarPerfil';
import CambiarContrasena from './pages/Perfil/CambiarContrasena';
import Seguridad from './pages/Perfil/Seguridad';

// Sección de las Licencias
import Licencias from './pages/Licencias/Licencias';
import CrearLicencias from './pages/Licencias/CrearLicencias';
import LicenciasPendientes from './pages/Licencias/LicenciasPendientes';
import HistorialLicencias from './pages/Licencias/HistorialLicencias';

// Sección de Contabilidad
import Contabilidad from './pages/Contabilidad/Contabilidad';
import Reportes from './pages/Contabilidad/Reportes';
import Informes from './pages/Contabilidad/Informes';
import Transacciones from './pages/Contabilidad/Transacciones';

// Componentes
import Navbar from './components/Navbar';

import './App.css';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/register']; // Con esto oculto la Navbar en login y registro

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Autenticación */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Página principal */}
        <Route path="/home" element={<Home />} />

        {/* Sección del Perfil */}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfil/editar" element={<EditarPerfil />} />
        <Route path="/perfil/cambiar-contrasena" element={<CambiarContrasena />} />
        <Route path="/perfil/seguridad" element={<Seguridad />} />

        {/* Sección de las Licencias */}
        <Route path="/licencias" element={<Licencias />} />
        <Route path="/licencias/nueva" element={<CrearLicencias />} />
        <Route path="/licencias/pendientes" element={<LicenciasPendientes />} />
        <Route path="/licencias/historial" element={<HistorialLicencias />} />

        {/* Sección de Contabilidad */}
        <Route path="/contabilidad" element={<Contabilidad />} />
        <Route path="/contabilidad/reportes" element={<Reportes />} />
        <Route path="/contabilidad/informes" element={<Informes />} />
        <Route path="/contabilidad/transacciones" element={<Transacciones />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
