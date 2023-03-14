import React from 'react'
import './Navbar.css'
import nav__logo from '../../Assets/Images/logo.png'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="nav__logo">
            <img src={nav__logo} alt="" />
        </div>
        <ul className='nav__col'>
            <li className='nav__item'>
                <a href="/">Bosh Sahifa</a>
            </li>
            <li className="nav__item">
                <a href="/stt">Ovozni Matnga</a>
            </li>
            <li className="nav__item">
                <a href="/tts">Matnni Ovozga</a>
            </li>
        </ul>
        <button className="btn">Admin Dashbord</button>
    </div>
  )
}

export default Navbar