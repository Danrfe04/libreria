import React from 'react'
import "./NavBar.css"
import "./CartWidget"
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav className="nav-main">
        <ul className='nav-list'>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/category/bolsillo">Bolsillo</NavLink></li>
            <li><NavLink to="/category/normal">Regular</NavLink></li>
            <li><NavLink to="/contact">Contacto</NavLink></li>
            <CartWidget/>
        </ul>
    </nav>
  );
}
