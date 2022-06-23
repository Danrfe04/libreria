import React from 'react'
import "./NavBar.css"
import "./CartWidget"
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav className="nav-main">
        <ul className='nav-list'>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>  
            </li>
            <CartWidget/>
        </ul>
    </nav>
  );
}
