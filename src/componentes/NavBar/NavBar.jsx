import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href="/">Nutrick</a>
      </div>
      <ul className='nav-links'>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Carrito</a></li>
        <li><a href="/">Servicios</a></li>
        <li><a href="/">Contacto</a></li>
      </ul>
      <nav>
        <button className='bot-login' >Login</button>
      </nav>
    </nav>

  )
}

export default NavBar
