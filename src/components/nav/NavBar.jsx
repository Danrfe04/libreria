import React from 'react'
import "./NavBar.css"
import "./CartWidget"
import CartWidget from './CartWidget';
export default function NavBar() {
  return (
    <nav className="nav-main">
        <ul className='nav-list'>
            <li>Inicio</li>
            <li>Inventario</li>
            <li>Mantenimiento</li>
            <CartWidget/>
        </ul>
    </nav>
  );
}
