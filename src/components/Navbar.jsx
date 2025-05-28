import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">Inicio</Link>
      <Link to="/licencias">Licencias</Link>
      <Link to="/contabilidad">Contabilidad</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/">Cerrar sesión</Link>
    </nav>
  );
}

export default Navbar;

